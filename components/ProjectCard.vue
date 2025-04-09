<template>
    <div class="bg-slate-300 m-4 p-8 rounded-4xl drop-shadow-[0_0px_10px_rgba(0,0,0,0.20)] flex gap-y-3 flex-col">
        <p class="text-left text-3xl">Project name</p>
        <!-- <img class="rounded-2xl" src="./public/images/25648545.jpeg" width="400" height="400" alt="" aria-placeholder="test" /> -->
        <Carousel v-bind="config">
          <Slide v-for="image in images" :key="image.id" class="">
            <img :src="image.url" alt="image" class="carimg"/>
          </Slide>
          
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
        <p class="border-2 p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div class="flex flex-row gap-2">
          <a class="font-light w-25 flex flex-row gap-2 rounded-4xl bg-slate-600" href="#">
            <img class="" width="24" height="28" src="/public/github-mark-white.svg">
            <p class="text-white">Website</p>
          </a>
          <a class="font-light w-25 flex flex-row gap-2 rounded-4xl bg-slate-600" href="#">
            <img class="" width="24" height="28" src="/public/github-mark-white.svg">
            <p class="text-white">Github</p>
          </a>
        </div>
        <div class="flex flex-row gap-3">
          <p class="bg-slate-400 rounded-4xl w-17 text-center">TechA</p>
          <p class="bg-slate-400 rounded-4xl w-17 text-center">TechA</p>
          <p class="bg-slate-400 rounded-4xl w-17 text-center">TechA</p>
        </div>
    </div>
</template>

<script setup>
defineProps(['project']);

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/seed/${Math.random()}/800/600`,
}))

const config = {
  height: 300,
  itemsToShow: 3,
  gap: 5,
  wrapAround: true,
}

</script>