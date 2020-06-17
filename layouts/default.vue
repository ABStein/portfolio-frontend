<template>
  <div>
    <script defer src="https://kit.fontawesome.com/d11cca7c30.js" crossorigin="anonymous"></script>
      <Navbar /> 
      <nuxt />
  </div>
</template>

<script>
import tailwindConfig from '~tailwind.config'

global.tailwindConfig = tailwindConfig

import Navbar from "../components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>
