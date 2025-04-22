<template>
  <div class="bg-slate-300 m-4 p-4 drop-shadow-[0_0px_10px_rgba(0,0,0,0.20)] flex gap-y-3 flex-col rounded-2xl">
    <p class="text-left text-3xl font-medium">{{ project.name }}</p>

    <Carousel v-bind="config">
      <Slide v-for="image in imageUrls" class="">
        <img :src="image" alt="image" class="" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>

    <p class="border-2 p-2">{{ project.description }}</p>
    <div class="flex flex-row gap-3">
      <a v-if="project.website !== ''" class="flex flex-row bg-slate-500 rounded-md" :href="project.website"
        target="_blank" rel="noopener noreferrer">
        <img width="24" height="28" src="/public/websiteopen.svg" />
        <p class="text-black font-bold">Website</p>
      </a>

      <a v-if="project.github !== ''" class="flex flex-row bg-slate-500 rounded-md" :href="project.github"
        target="_blank" rel="noopener noreferrer">
        <img width="24" height="28" src="/public/github.svg" />
        <p class="text-white font-bold">Github</p>
      </a>
    </div>


    <div class="flex flex-row gap-3 flex-wrap">
      <Tag v-for="tag in project.tagNames" :key="tag" :title="tag" />
    </div>

  </div>
</template>

<style>
.carousel {
  --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
  --vc-pgn-active-color: rgba(255, 255, 255, 1);
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 50%;
}
</style>

<script setup>
const props = defineProps(['project']);

import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const imageUrls = props['project'].urls;

const config = {
  height: 300,
  itemsToShow: 2,
  gap: 4,
  wrapAround: true,
}



</script>
