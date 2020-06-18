<template>
  <section>
    <div class="conact-form container my-4 mx-auto px-4 md:px-12">
      <span class="flex justify-center text-4xl">Contact</span>
    </div>

    <div class="flex flex-col justify-center items-center">
      <v-form ref="form" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="contact" value="contact-form">
        <label for="name">Your Name:</label>
        <input type="text" name="name" v-model="name">
        <label for="name">Your Email:</label>
        <input type="email" name="email" v-model="email">
        <label for="role">Your Role</label>
        <select name="role" id="">
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select>
        <label for="message">Message:</label>
        <input type="text" name="message" v-model="message">
        <button type="submit" class="">
          Submit
        </button>
      </v-form>
    </div>
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,
      items: ['Leader', 'Follower']
    }
  },
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