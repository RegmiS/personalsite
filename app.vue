<template>
  <body class="">
    <div class="fixed m-4 mr-400 flex w-90 shrink-5 flex-col overflow-y-auto rounded-4xl p-8 z-10 gap-y-6 h-full">
      <img class="rounded-4xl cover" src="./public/images/25648545.jpeg" width="400" height="400" alt="" aria-placeholder="test" />
      <div class="text-center shadow-2xl">
        <p class="font-bold text-slate-900 text-xl">RegmiS</p>
        <p class="font-medium">Developer looking to learn and make interesting things</p>
      </div>
      <section class="flex flex-col">
        <p class="text-left font-bold text-3xl">Pages</p>
        <div class="ml-2 flex flex-col mt-2 gap-2">
          <a class="text-xl underline underline-offset-2 flex flex-row gap-2" href="#">
            <img class="" src="./public/desktop_cloud_stack_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg">
            Projects
          </a>
          <a class="text-xl underline-offset-2 flex flex-row gap-2" href="#">
            <img src="./public/experiment_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg">
            Research
          </a>
          <a class="text-xl underline-offset-2 flex flex-row gap-2" href="#">
            <img src="./public/experiment_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg">
            Volunteering
          </a>
          <a class="text-xl underline-offset-2 flex flex-row gap-2" href="#">
            <img class="bg-blue-200" width="24" height="28" src="./public/github-mark-white.svg">
            Github
          </a>
          <a class="text-xl underline-offset-2 flex flex-row gap-2" href="#">
            <img class="" width="24" height="28" src="./public/linkedin.svg">
            Linkedin
          </a>
          <a class="text-xl underline-offset-2 flex flex-row gap-2" href="#">
            <img class="" width="24" height="28" src="./public/picture_as_pdf_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg">
            <img class="" width="24" height="28" src="./public/in-new-tab.svg">
            Resume Open
          </a>
          <a class="text-xl underline-offset-2 flex flex-row gap-2" href="#">
            <img class="" width="24" height="28" src="./public/picture_as_pdf_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg">
            <img class="" width="24" height="28" src="./public/download_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg">
            Resume Download
          </a>
        </div>
      </section>
      <div class="inline">
        <p class="text-left font-bold text-3xl">About</p>
        <p class="mt-1 ml-2">Graduated from UofC with experiences in different industries - from environment to research. Currently working on expanding skillset and learning new technologies like Rust and Golang.</p>
      </div>
    </div>
    <main class="ml-100 flex flex-col mr-7">
      <div class="p-6 flex gap-y-3 flex-col">
        <p class="underline underline-offset-2 text-left text-7xl font-bold">Projects</p>
        <div class="border-2">
          <div class="flex flex-row p-4 gap-x-1.5">
            <p class="bg-slate-400 rounded-4xl w-12 text-center">All</p>
            <p class="bg-slate-400 rounded-4xl w-12 text-center">Easy</p>
            <p class="bg-slate-400 rounded-4xl w-12 text-center">Med</p>
            <p class="bg-slate-400 rounded-4xl w-12 text-center">Hard</p>
          </div>
          <div class="flex flex-row p-4 pt-1 gap-x-3">
            <p class="bg-slate-400 rounded-4xl w-17 text-center">All</p>
            <p class="bg-slate-400 rounded-4xl w-17 text-center">None</p>
            <p class="bg-slate-400 rounded-4xl w-17 text-center">Manual</p>
          </div>
          <div class="flex flex-row p-4 pt-1 gap-x-3">
            <p class="bg-slate-400 rounded-4xl w-17 text-center">TechA</p>
            <p class="bg-slate-400 rounded-4xl w-17 text-center">TechA</p>
            <p class="bg-slate-400 rounded-4xl w-17 text-center">TechA</p>
            <p class="bg-slate-400 rounded-4xl w-17 text-center">TechA</p>
            <p class="bg-slate-400 rounded-4xl w-17 text-center">TechA</p>
            <p class="bg-slate-400 rounded-4xl w-17 text-center">TechA</p>
            <p class="bg-slate-400 rounded-4xl w-17 text-center">TechA</p>
          </div>
        </div>
        
      </div>
      <div class="bg-slate-300 m-4 p-8 rounded-4xl drop-shadow-[0_0px_10px_rgba(0,0,0,0.20)] flex gap-y-3 flex-col">
        <p class="text-left text-3xl">Project name</p>
        <img class="rounded-2xl" src="./public/images/25648545.jpeg" width="400" height="400" alt="" aria-placeholder="test" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div>
          <a>Page</a>
          <a>Github</a>
        </div>
        <div class="flex flex-row gap-3">
          <p>Tech A</p>
          <p>Tech B</p>
          <p>Tech C</p>
        </div>
      </div>
      <div class="bg-blue-300 m-4 p-8 rounded-4xl">
        <p>Project name</p>
        <img class="" src="" width="400" height="400" alt="" aria-placeholder="test" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div>
          <p>Tech A</p>
          <p>Tech B</p>
          <p>Tech C</p>
        </div>
      </div>
    </main>
  </body>
</template>
