<template>
  <section>
    <div class="flex flex-col justify-center items-center my-4 mx-auto px-4 md:px-12">
      <div class="mb-4">
        <span class="text-4xl">Hey there! 👋</span>
      </div>
      <div class="text-gray-600 text-xl w-full max-w-lg">
          My name is Andrew Stein. I'm a Software Engineer who 
          is passionate about creating amazing experiences and
          all things on the web 👨‍💻
      </div>
      <a class="text-gray-600 text-xl" href="https://drive.google.com/file/d/1Eyzk_0yh3L02jvqIwty2K03oAK09CcPD/view?usp=sharing">Checkout My Resume</a>
    </div>
    <div>
      <img src="../assets/img/headshot.jpg" alt="">
    </div>
  </section>
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

