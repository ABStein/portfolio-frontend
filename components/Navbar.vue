<template>
  <header class="max-w-900 mx-auto py-6">
    <div class="flex justify-between items-center px-8 md:px-14 lg:px-24 w-full px-3">
        <div class="text-lg font-bold">Andrew.Stein</div>
        <div class="flex">
          <nuxt-link to="/" class="nav-link hover:text-secondary block px-2 py-1">Home</nuxt-link>
          <nuxt-link to="/projects" class="nav-link hover:text-secondary block px-2 py-1">Projects</nuxt-link>
          <nuxt-link to="/experience" class="nav-link hover:text-secondary block px-2 py-1">Experience</nuxt-link>
          <nuxt-link to="/contact" class="nav-link hover:text-secondary block px-2 py-1">Contact</nuxt-link>
        </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {

    }
  },
};
</script>
