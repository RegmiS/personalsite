import PocketBase from 'pocketbase';

export default defineEventHandler(async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBaseUrl;
    const pb = new PocketBase(baseUrl);

    const userId = '3wllcx2wa1j8dij';

    const projects = await pb.collection('projects').getFullList({
        filter: `user = "${userId}"`,
        expand: 'images,tags',
        sort: '-completedon',
    });

    projects.forEach((project) => {
        let urls = [];
        const images = project.expand?.images || [];
        images.forEach((img) => {
            const url = pb.files.getURL(img, img.image);
            urls.push(url);
        });

        project["urls"] = urls;

        let tagNames = [];
        const tags = project.expand?.tags || [];
        tags.forEach(tag => {
            tagNames.push(tag.name);
        });
        project["tagNames"] = tagNames;
    });

    return projects;
});
