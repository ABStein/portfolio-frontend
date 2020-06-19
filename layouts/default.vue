<template>
  <div>
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
