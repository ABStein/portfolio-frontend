<template>
  <div class="conatiner bg-white rounded-lg p-6 m-6 overflow-hidden shadow-lg">
    <div class="px-4 py-6">
      <h4 class="font-semibold text-lg leading-tight truncate">{{ project_title }}</h4>
      <div class="mt-1">
        <span class="text-gray-600 text-sm">{{ project_description }}</span>  
      </div>
      <div class="flex flex-col mt-4">
        <a :href="repo" class="text-left text-gray-600 font-semibold">View on Github</a>
        <a :href="live_site" class="text-left text-gray-600 font-semibold">Live Site</a>
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