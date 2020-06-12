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
/* purge ignore */
:root {
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
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background: url('../assets/img/yellow-bokeh.jpg') no-repeat center center/cover;
}

body::-webkit-scrollbar {
  width: 0.5rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: #6649b8;
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
/* purge ignore */
</style>
