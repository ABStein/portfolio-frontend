<template>
  <div class="rounded-2xl overflow-hidden drop-shadow-2xl border">
    <div class="px-4">
      <div class="mt-3">
        <h3 class="my-2 font-semibold text-lg">{{ title }}</h3>
        <p class="my-2 text-sm">{{ job_description }}</p>
      </div>
      <div class="mt-3">
        <p class="my-2 text-xs">{{ company }}</p>
        <p class="my-1 text-xs font-bold italic text-primary">{{ employment_length }}</p>
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
