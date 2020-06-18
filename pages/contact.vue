<template>
  <section>
    <div class="login-content container my-4 mx-auto px-4 md:px-12">
      <span class="flex justify-center text-4xl">Contact</span>
    </div>

    <div class="flex flex-col justify-center items-center">
      <form class="mt-2" name="contact" method="POST" data-netlify="true">
        <p class="mt-2">
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p class="mt-2">
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p class="mt-2">
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p class="mt-2">
          <button type="submit">Send</button>
        </p>
      </form>
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