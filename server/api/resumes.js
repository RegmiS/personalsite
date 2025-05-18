import PocketBase from 'pocketbase';
import { setHeader } from 'h3';
import { sendStream } from 'h3';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBaseUrl;
    const pb = new PocketBase(baseUrl);

    const userId = '992p58zv5imdy48';

    const latestresume = await pb.collection('resumes').getList(1, 1, {
        filter: `user = "${userId}"`,
        sort: '-created',
    });

    const resume = latestresume.items[0];

    if (!resume || !resume.file) {
        throw createError({ statusCode: 404, statusMessage: 'Resume not found.' });
    }
    const fileUrl = pb.files.getURL(resume, resume.file);

    const response = await fetch(fileUrl);
    if (!response.ok) {
        throw createError({ statusCode: 500, statusMessage: 'Failed to fetch resume file.' });
    }

    const fileName = resume.file.split('/').pop() || 'resume.pdf';
    const contentType = response.headers.get('Content-Type') || 'application/pdf';

    setHeader(event, 'Content-Disposition', `inline; filename="${fileName}"`);
    setHeader(event, 'Content-Type', contentType);

    const readableStream = response.body; // readable stream

    // have to use sendstream instead of an array buffer so the server does not try to autoically serialize it
    // Nuxt doesn't auto-serialize raw buffers correctly for HTTP responses
    return sendStream(event, readableStream);
});
