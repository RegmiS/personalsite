import PocketBase from 'pocketbase';

export default defineEventHandler(async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBaseUrl;
    const pb = new PocketBase(baseUrl);

    const userId = '992p58zv5imdy48';

    const projects = await pb.collection('projects').getFullList({
        filter: `user = "${userId}"`,
        expand: 'images,tags',
        sort: '-completedon',
    });

    projects.forEach((project) => {
        let urls = [];
        const images = project.expand?.images || [];
        images.forEach((img) => {
            const url = pb.files.getURL(img, img.imagefile);
            urls.push(url);
        });

        project["urls"] = urls;

        let tagNames = [];
        const tags = project.expand?.tags || [];
        tags.forEach(tag => {
            tagNames.push(tag.tagname);
        });
        project["tagNames"] = tagNames;
    });
    //console.log(projects);

    return projects;
});
