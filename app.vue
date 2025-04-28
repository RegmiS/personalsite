<template>
  <NuxtLayout>
    <transition name="blur-swap" mode="out-in">
      <NuxtPage />
    </transition>
  </NuxtLayout>
</template>

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

<script setup>
const { fetchProjects } = useProjects();
onMounted(fetchProjects);

</script>