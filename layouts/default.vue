<template>
  <div>
    <script defer src="https://kit.fontawesome.com/d11cca7c30.js" crossorigin="anonymous"></script>
    <div>
      <Navbar /> 
    </div>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>


<style>
:root {
  /* font-size: 16px;
  font-family: 'Open Sans'; */
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
  --transition-speed: 400ms;
}

* {
  box-sizing: border-box;
  box-sizing: (max-width 500px);
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

ul {
  list-style: none;
}

.container {
  margin-left: 80px;
  overflow: hidden;
  padding: 1rem 2rem;
}


/* Small screens */
@media only screen and (max-width: 600px) {
  .container {
    margin-left: 0px;
    overflow: hidden;
    padding: 1rem 2rem;
  }
}
</style>
