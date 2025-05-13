<template>
  <div class="flex flex-col p-8 z-10 gap-y-6 md:h-full md:overflow-y-auto">
    <img class="rounded-4xl cover" src="/public/images/profileimg.jpeg" width="400" height="400" alt=""
      aria-placeholder="test" />
    <div class="text-center shadow-2xl">
      <p class="font-bold text-slate-900 text-xl">RegmiS</p>
      <p class="font-medium pb-2">Developer trying to get over the fear of failure</p>
    </div>
    <section class="flex flex-col">
      <p class="text-left font-bold text-3xl">Pages</p>
      <div class="ml-2 flex flex-col mt-2 gap-2">
        <NuxtLink class="text-xl flex flex-row gap-2" 
          :class="{ 'underline underline-offset-2': route.path === '/' }"
          to="/"
        >
          <img class="" src="/public/desktop_cloud_stack.svg">
          Projects
        </NuxtLink>

        <!-- <NuxtLink class="text-xl underline-offset-2 flex flex-row gap-2"
          :class="{ 'underline underline-offset-2': route.path === '/research' }"
          to="/research"
        >
          <img src="/public/science.svg">
          Research
        </NuxtLink>

        <NuxtLink class="text-xl underline-offset-2 flex flex-row gap-2"
          :class="{ 'underline underline-offset-2': route.path === '/volunteering' }"
          to="/volunteering"
        >
          <img src="/public/volunteertest.svg">
          Volunteering
        </NuxtLink> -->
        
        <a class="text-xl underline-offset-2 flex flex-row gap-2" href="https://github.com/RegmiS" target="_blank"
          rel="noopener noreferrer">
          <img class="bg-black" width="24" height="28" src="/public/github.svg">
          Github
        </a>
        <a class="text-xl underline-offset-2 flex flex-row gap-2" href="https://www.linkedin.com/in/san-regmi/"
          target="_blank" rel="noopener noreferrer">
          <img class="" width="24" height="28" src="/public/linkedin.svg">
          Linkedin
        </a>
        <a class="text-xl underline-offset-2 flex flex-row gap-1" href="/api/resumes" target="_blank">
          <img class="" width="24" height="28" src="/public/pdf.svg">
          <img class="" width="24" height="28" src="/public/newtab.svg">
          Resume Open
        </a>
        
        <!-- <NuxtLink class="text-xl underline-offset-2 flex flex-row gap-1" to="/">
          <img class="" width="24" height="28" src="/public/pdf.svg">
          <img class="" width="24" height="28" src="/public/download.svg">
          Resume Download
        </NuxtLink> -->
      </div>
    </section>
    <div class="inline">
      <p class="text-left font-bold text-3xl">About</p>
      <p class="mt-1 ml-2">Graduated from UofC with experiences in environment, sustainability, research, vounteering, and startups. I'm currently trying to build the projects that I always wanted to make but was too scared to start. I'm also slowly becoming a vim addict...</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute();

// const { resume } = useResume();
</script>