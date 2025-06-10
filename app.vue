<template>
  <NuxtLayout>
    <div v-if="loading">
      <p class="text-center mt-8 text-lg text-gray-500 animate-pulse">
        <span v-if="coldStart">🔧 Server is waking up... please wait ~10–20s</span>
        <span v-else>Loading projects… should take around 3-4 seconds</span>
      </p>
    </div>

    <transition v-else name="blur-swap" mode="out-in">
      <NuxtPage />
    </transition>
  </NuxtLayout>
</template>

<script setup>

const { fetchProjects, loading, coldStart } = useProjects();
onMounted(fetchProjects);

</script>

<style>
.blur-swap-enter-active,
.blur-swap-leave-active {
  transition: all 0.2s ease;
}

/* blurring out pages when you leave */
.blur-swap-leave-from {
  opacity: 1;
  filter: blur(0px);
}

.blur-swap-leave-to {
  opacity: 0;
  filter: blur(10px);
}

/* blurring when entering pages */
.blur-swap-enter-from {
  opacity: 0;
  filter: blur(10px);
}

.blur-swap-enter-to {
  opacity: 1;
  filter: blur(0px);
}
</style>
