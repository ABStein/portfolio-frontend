<template>
  <section>
    <div class="my-4 mx-auto px-4 md:px-12">

      <div v-if="pushedButton" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
        <strong class="font-bold">Succesfully sold your soul.</strong>
        <span class="block sm:inline">Should've read the fine print. What do you mean there wasn't any?</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        </span>
      </div>
      
      <span class="flex justify-center text-4xl">Contact</span>
      <div class="mx-auto w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-4" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <div class="mb-4">
            <input type="hidden" name="form-name" value="contact" />
            <label class="form-label block text-gray-600 text-sm font-bold mb-2" for="name">
              Name:
            </label>
            <input class="form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" name="name" id="name" />
          </div>

          <div class="mb-4">
            <label class="form-label block text-gray-600 text-sm font-bold mb-2" for="email">
              Email:
            </label>
            <input class="form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" />
          </div>

          <div class="mb-4">
            <label class="form-label block text-gray-600 text-sm font-bold mb-2" for="message">
              Message:
            </label>
            <textarea class="form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" name="message" id="message"></textarea>            
          </div>

          <div class="flex justify-center mb-4">
            <button @click="pushedButton = true" type="submit" class="btn mt-3 bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full">
              Let's Connect!
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  data() {
    return {
      pushedButton: false
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