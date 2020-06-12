<template>
  <div>
    <h1>About Me</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Welcome to the life of Andrew",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "All Andrew all the time"
        }
      ]
    };
  }
};
</script>

<style>
/* purge ignore */
.job {
  color: #fff;
  padding: 1rem;
  border: 1px solid #df49a6;
  border-radius: 5px;
  margin: 1rem 0;
  list-style: none;
}
/* purge ignore */
</style>