export const useProjects = () => {
    const projects = useState('projects', () => []);

    const fetchProjects = async () => {
        if (projects.value.length === 0){
            const data = await $fetch('/api/projects');
            projects.value = data.items;
        }
    };

    return {
        projects, fetchProjects,
    }
}