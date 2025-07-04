<template>
  <div class="pdf-container">
    <iframe src="/api/resumes" class="pdf-iframe" frame-border="0" title="Resume"></iframe>
  </div>
</template>

<script setup>
useHead({
  title: 'Resume',
  meta: [{
    name: 'resume',
    content: 'resume'
  }]
});
definePageMeta({
  layout: 'blank',
});
</script>


<style scoped>
.pdf-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.pdf-iframe {
  width: 100%;
  height: 100%;
}
</style>
