<template>
    <div class="flex h-screen">
    <!-- Sidebar (InfoBar) -->
    <div class="w-1/4 p-6 overflow-y-auto">
      <InfoBar />
    </div>

    <!-- Main Content (Filter + Projects) -->
    <div class="w-3/4 p-6 flex flex-col gap-6 overflow-y-auto">
      <ProjectFilter
        :allTags="allTags"
        @update:mode="mode = $event"
        @update:selectedTags="selectedTags = $event"
      />
      <ProjectCard 
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<style>
.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}
.carimg {
  /* border-radius: 8px; */
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { useProjects } from '../composables/useProjects'
import InfoBar from '../components/InfoBar.vue'
import ProjectFilter from '../components/ProjectFilter.vue'

const {projects, allTags, fetchProjects} = useProjects();
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