<template>
  <div class="p-6 flex gap-y-3 flex-col">
    <p class="underline underline-offset-2 text-left text-7xl font-bold">Projects</p>
    <div class="border-2">
      <!-- <div class="flex flex-row p-4 gap-x-1.5">
        <p class="bg-slate-400 rounded-4xl w-12 text-center">All</p>
        <p class="bg-slate-400 rounded-4xl w-12 text-center">Easy</p>
        <p class="bg-slate-400 rounded-4xl w-12 text-center">Med</p>
        <p class="bg-slate-400 rounded-4xl w-12 text-center">Hard</p>
      </div> -->
      <div class="flex flex-row p-4 pt-1 gap-x-3 mt-3">
        <button :class="{
          'filter': mode != 'all',
          'filter-selected': mode === 'all'
        }" @click="setMode('all')">
          All
        </button>
        <button :class="{
          'filter': mode != 'none',
          'filter-selected': mode === 'none'
        }" @click="setMode('none')">
          None
        </button>
        <button :class="{
          'filter': mode != 'manual',
          'filter-selected': mode === 'manual'
        }" @click="setMode('manual')">
          Manual
        </button>

      </div>

      <div class="flex flex-row p-4 pt-1 gap-x-3">
        <button :class="{
          'tagbtn text-white': selectedTags.includes(tag),
          'tagbtn': allTags.includes(tag)
        }" v-for="tag in allTags" :key=tag @click="toggleTag(tag)">
          {{ tag }}
        </button>

      </div>
    </div>
  </div>
</template>

<style>
.filter {
  @apply rounded-lg bg-slate-600 w-16 font-medium text-white;
}

.filter-selected {
  @apply font-medium bg-red-400 text-black rounded-lg w-16;
}

.tagbtn {
  @apply bg-red-400 rounded-md text-center p-1;
}
</style>

<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps(['allTags']);
const emit = defineEmits(['update:selectedTags', 'update:mode']);

const selectedTags = ref([]); // cloen alltags at load
const mode = ref('all'); // reactive reference, need to write mode.value inside templates

function setMode(newMode) {
  mode.value = newMode;
  emit('update:mode', newMode);

  if (newMode === 'all') {
    selectedTags.value = [...props.allTags];
  } else if (newMode === 'none') {
    selectedTags.value = [];
  }

  emit('update:selectedTags', selectedTags.value);
}

function toggleTag(tag) {
  // switch to manual mode on tag click
  if (mode.value !== 'manual') {
    mode.value = 'manual';
    emit('update:mode', 'manual');
  }

  const i = selectedTags.value.indexOf(tag);
  if (i > -1) {
    selectedTags.value.splice(i, 1);
  } else {
    selectedTags.value.push(tag);
  }

  emit('update:selectedTags', [...selectedTags.value]);

}
</script>
