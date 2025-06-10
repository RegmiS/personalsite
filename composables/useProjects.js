export const useProjects = () => {
    const projects = useState('projects', () => []);
    const allTags = useState('allTags', () => []);
    const loading = useState('loading', () => false);
    const coldStart = useState('coldStart', () => false);

    const fetchProjects = async () => {
        if (projects.value.length === 0) {
            loading.value = true;
            coldStart.value = false;

            // timer to detect cold start
            const coldStartTimer = setTimeout(() => {
                coldStart.value = true;
            }, 3000);

            try {
                const data = await $fetch('/api/projects');

                projects.value = data.map((project) => ({
                    id: project.id,
                    name: project.projectname,
                    description: project.description,
                    github: project.githublink,
                    website: project.websitelink,
                    urls: project.urls,
                    tagNames: project.tagNames,
                    completed: project.completedon,
                }));

                const tagSet = new Set();
                projects.value.forEach(p => {
                    p.tagNames.forEach(tag => tagSet.add(tag));
                });
                allTags.value = Array.from(tagSet);
            } catch (error) {
                console.error('Project fetch error', error);
            } finally {
                clearTimeout(coldStartTimer);
                loading.value = false;
            }
        }
    };

    return {
        projects, allTags, fetchProjects, loading, coldStart,
    }
}
