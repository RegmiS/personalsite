import { usePocketbase } from "~/composables/usePocketBase";

export default defineEventHandler(async () => {
    const pb = usePocketbase();
    const userId = '3wllcx2wa1j8dij';
    
    const projects = await pb.collection('projects').getFullList({
        filter: `user = "${userId}"`,
        sort: '-created',
        expand: 'images,tags',
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