<template>
  <div class="bg-white rounded-lg p-6 m-6 overflow-hidden shadow-lg">
    <div class="px-4 py-6">
      <h4 class="font-semibold text-lg leading-tight truncate">{{ title }}</h4>
      <div class="mt-1">
        <span class="text-gray-600 text-sm">{{ job_description }}</span>  
      </div>
      <div class="mt-4">
        <span class="text-purple-600 font-semibold">{{ company }}</span>
        <span class="text-gray-600 text-sm"> {{ employment_length }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Job',
  props: ['title', 'job_description', 'company', 'employment_length']
}
</script>