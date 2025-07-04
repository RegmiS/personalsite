import PocketBase from 'pocketbase';
import { setHeader, sendStream } from 'h3';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.apiBaseUrl);
    const query = getQuery(event);

    const { recordId, filename, collectionId } = query;
    if (!recordId || !filename || !collectionId) {
        throw createError({ statusCode: 400, statusMessage: 'Missing img params' });
    }

    const record = {
        collectionId: collectionId,
        filename: filename,
        recordId: recordId,
    };
    const fileUrl = new URL(`/api/files/${collectionId}/${recordId}/${filename}`, config.public.apiBaseUrl).href;
    const response = await fetch(fileUrl);
    if (!response.ok) {
        throw createError({ statusCode: response.status, statusMessage: 'Failed img request' });
    }

    const contentType = response.headers.get('Content-Type') || 'image/jpeg';
    setHeader(event, 'Content-Type', contentType);
    setHeader(event, 'Cache-Control', 'public, max-age=86400'); //1 day browser caching
    return sendStream(event, response.body);
});
