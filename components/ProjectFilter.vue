
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
        <button
          :class="{ 
            'bg-slate-400 rounded-4xl w-17 text-center  ': mode != 'all', 
            'bg-slate-400 rounded-4xl w-17 text-center text-white': mode === 'all' }"
          @click="setMode('all')"
        >
          All
        </button>
        <button
          :class="{ 
            'bg-slate-400 rounded-4xl w-17 text-center': mode != 'none',
            'bg-slate-400 rounded-4xl w-17 text-center text-white': mode === 'none' }"
          @click="setMode('none')"
        >
          None
        </button>
        <button
          :class="{ 
            'bg-slate-400 rounded-4xl w-17 text-center': mode != 'manual',
            'bg-slate-400 rounded-4xl w-17 text-center text-white': mode === 'manual' }"
          @click="setMode('manual')"
        >
          Manual
        </button>

        <!-- bg-slate-400 rounded-4xl w-17 text-center -->
      </div>
      <div class="flex flex-row p-4 pt-1 gap-x-3">
        <button
          :class="{ 
            'bg-slate-400 rounded-4xl w-17 text-center text-white': selectedTags.includes(tag),
            'bg-slate-400 rounded-4xl w-17 text-center': allTags.includes(tag) }"
          v-for="tag in allTags"
          :key = tag
          @click="toggleTag(tag)"
        >
        {{ tag }}
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['allTags']);
const emit = defineEmits(['update:selectedTags', 'update:mode']);

const selectedTags = ref([]);
const mode = ref('all');

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
