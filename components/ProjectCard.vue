<template>
  <div class="bg-secondary rounded-2xl overflow-hidden drop-shadow-2xl">
    <div class="px-4 py-6 text-white">
      <h4 class="font-semibold text-lg leading-tight truncate">{{ project_title }}</h4>
      <div class="mt-1">
        <span class="text-sm">{{ project_description }}</span>
      </div>

      <div class="flex justify-around items-center mt-4 space-x-4">
        <a :href="repo" class="nav-link bg-primary hover:bg-primary_opacity text-white py-2 px-4 rounded text-center lg:w-64 w-48 self-center lg:self-auto">Code</a>
        <a :href="live_site" class="nav-link bg-primary hover:bg-primary_opacity text-white py-2 px-4 rounded text-center lg:w-64 w-48 self-center lg:self-auto">Live Site</a>
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
