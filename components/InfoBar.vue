<template>
  <div class="flex flex-col overflow-y-auto p-8 z-10 gap-y-6 h-full">
    <img class="rounded-4xl cover" src="/public/images/profileimg.jpeg" width="400" height="400" alt=""
      aria-placeholder="test" />
    <div class="text-center shadow-2xl">
      <p class="font-bold text-slate-900 text-xl">RegmiS</p>
      <p class="font-medium pb-2">Developer looking to learn and make interesting things</p>
    </div>
    <section class="flex flex-col">
      <p class="text-left font-bold text-3xl">Pages</p>
      <div class="ml-2 flex flex-col mt-2 gap-2">
        <NuxtLink class="text-xl underline underline-offset-2 flex flex-row gap-2" to="/">
          <img class="" src="/public/desktop_cloud_stack.svg">
          Projects
        </NuxtLink>
        <NuxtLink class="text-xl underline-offset-2 flex flex-row gap-2" to="/">
          <img src="/public/science.svg">
          Research
        </NuxtLink>
        <NuxtLink class="text-xl underline-offset-2 flex flex-row gap-2" to="/">
          <img src="/public/volunteertest.svg">
          Volunteering
        </NuxtLink>
        <a class="text-xl underline-offset-2 flex flex-row gap-2" href="https://github.com/RegmiS" target="_blank"
          rel="noopener noreferrer">
          <img class="bg-black" width="24" height="28" src="/public/github.svg">
          Github
        </a>
        <a class="text-xl underline-offset-2 flex flex-row gap-2" href="https://www.linkedin.com/in/san-regmi/"
          target="_blank" rel="noopener noreferrer">
          <img class="" width="24" height="28" src="/public/linkedin.svg">
          Linkedin
        </a>
        <NuxtLink class="text-xl underline-offset-2 flex flex-row gap-1" to="/">
          <img class="" width="24" height="28" src="/public/pdf.svg">
          <img class="" width="24" height="28" src="/public/newtab.svg">
          Resume Open
        </NuxtLink>
        <NuxtLink class="text-xl underline-offset-2 flex flex-row gap-1" to="/">
          <img class="" width="24" height="28" src="/public/pdf.svg">
          <img class="" width="24" height="28" src="/public/download.svg">
          Resume Download
        </NuxtLink>
      </div>
    </section>
    <div class="inline">
      <p class="text-left font-bold text-3xl">About</p>
      <p class="mt-1 ml-2">Graduated from UofC with experiences in different industries - from environment to research.
        Currently working on expanding skillset and learning new technologies like Rust and Golang.</p>
    </div>
  </div>
</template>
