<template>
  <div class="conatiner bg-white rounded-lg p-6 m-6 overflow-hidden shadow-lg">
    <div class="px-4 py-6">
      <h4 class="font-semibold text-lg leading-tight truncate">{{ project_title }}</h4>
      <div class="mt-1">
        <span class="text-gray-600 text-sm">{{ project_description }}</span>  
      </div>

      <div class="flex justify-center items-center mt-4 mb-4">
        <a :href="repo" class="btn text-center text-white px-5 font-semibold rounded-full m-2">Code</a>
        <a :href="live_site" class="btn text-center text-white px-5 font-semibold rounded-full m-2">Live Site</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['project_title', 'project_description', 'Project_demo', 'repo', 'live_site']
}
</script>