<template>
    <div class="flex h-screen">
      <!-- Sidebar -->
      <div class="w-1/4 p-6 overflow-y-auto">
        <InfoBar />
      </div>
  
      <!-- Page content -->
      <div class="w-3/4 p-3 flex flex-col overflow-y-auto">
        <slot />
      </div>
    </div>
</template>

<script setup>

import InfoBar from '../components/InfoBar.vue'

</script>