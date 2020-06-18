<template>
  <div>
    <script defer src="https://kit.fontawesome.com/d11cca7c30.js" crossorigin="anonymous"></script>
      <Navbar /> 
      <nuxt />
      <Footer />
  </div>
</template>

<script>
import tailwindConfig from '~tailwind.config'

global.tailwindConfig = tailwindConfig

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
