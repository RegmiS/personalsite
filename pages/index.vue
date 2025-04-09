<template>
    <InfoBar />
    <div class="ml-100 flex flex-col mr-7">
      <ProjectFilter />
      <ProjectCard v-for="project in projects" :key="project.id"/>
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

const {projects, fetchProjects} = useProjects();
onMounted(fetchProjects);
</script>