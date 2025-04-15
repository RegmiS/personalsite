<template>
  <p class="bg-slate-400 rounded-md w-auto text-center p-1.5 ">{{ title }}</p>
</template>


<script setup>
// title prop passed from parent, is required
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>
