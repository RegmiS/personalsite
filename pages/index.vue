<template>
  <div>
    <ProjectFilter :allTags="allTags" @update:mode="mode = $event" @update:selectedTags="selectedTags = $event" />
    <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
  </div>
</template>


<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { useProjects } from '../composables/useProjects'
import ProjectFilter from '../components/ProjectFilter.vue'

const { projects, allTags, fetchProjects } = useProjects();
onMounted(fetchProjects);

const selectedTags = ref([]);
const mode = ref('all');

const filteredProjects = computed(() => {
  if (mode.value === 'all') {
    return projects.value;
  }
  if (mode.value === 'none') {
    return [];
  }

  // Manual: only show if ANY tag matches
  return projects.value.filter((project) =>
    project.tagNames?.some((tag) => selectedTags.value.includes(tag))
  );
});

</script>
