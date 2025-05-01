<template>
    <div class="flex h-screen flex-col md:flex-row min-h-screen">
      <!-- Sidebar -->
      <div class="w-full md:w-1/4 p-6 bg-gray-100 md:h-screen md:overflow-y-auto">
        <InfoBar />
      </div>
  
      <!-- Page content -->
      <div class="w-full md:w-3/4 p-3 md:flex-1 md:overflow-y-auto">
        <slot />
      </div>
    </div>
</template>

<script setup>

import InfoBar from '../components/InfoBar.vue'

</script>