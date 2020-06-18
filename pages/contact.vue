<template>
  <div class="container">
    <div>
      <h1>{{ teaName }}</h1>
    </div>
    <div>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
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
        <button type="submit" class="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full">
          Submit
        </button>
      </form>
    </div>
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