export const useProjects = () => {
    const projects = useState('projects', () => []);
    const allTags = useState('allTags', () => []);

    const fetchProjects = async () => {
        if (projects.value.length === 0) {
            const data = await $fetch('/api/projects');
            // console.log(data);

            projects.value = data.map((project) => {
                return {
                    id: project.id,
                    name: project.projectname,
                    description: project.description,
                    github: project.githublink,
                    website: project.websitelink,
                    urls: project.urls,
                    tagNames: project.tagNames,
                    completed: project.completedon,
                }
            });
        }
        
        const tagSet = new Set();
        projects.value.forEach(p => {
            p.tagNames.forEach(tag => tagSet.add(tag));
        });

        allTags.value = Array.from(tagSet);
    };

    // console.log(projects);

    return {
        projects, allTags, fetchProjects,
    }
}
