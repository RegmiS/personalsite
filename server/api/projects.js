import { usePocketbase } from "~/composables/usePocketBase";

export default defineEventHandler(async () => {
    const pb = usePocketbase();
    const userId = '3wllcx2wa1j8dij';
    
    const projects = await pb.collection('projects').getFullList({
        filter: `user="${userId}"`,
        sort: '-created',
        expand: 'images, tags',
    });
    
    return projects;
});