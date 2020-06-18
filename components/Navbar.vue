<template>
  <header class="nav-header sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-600 hover:text-purple-600 focus:text-purple-600 focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 448 512">
              <path v-if="isOpen" fill-rule="evenodd" d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path>
              <path v-if="!isOpen" fill-rule="evenodd" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
          </svg>
        </button> 
      </div>
    </div>

    <div :class="isOpen ? 'block' : 'hidden'" class="mx-auto px-2 pt-2 pb-4 sm:flex sm:p-0">  
      <nuxt-link to="/" class="nav-link block px-2 py-1 sm:ml-2">Home</nuxt-link>
      <nuxt-link to="/projects" class="nav-link block px-2 py-1 sm:ml-2">Projects</nuxt-link>
      <nuxt-link to="/experience" class="nav-link mt-1 block px-2 py-1 sm:mt-0 sm:ml-2">Experience</nuxt-link>
      <nuxt-link to="/about" class="nav-link mt-1 block px-2 py-1 sm:mt-0 sm:ml-2">About</nuxt-link>
      <nuxt-link to="/contact" class="nav-link mt-1 block px-2 py-1 sm:mt-0 sm:ml-2">Contact</nuxt-link>
    </div>

  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
    }
  },
};
</script>