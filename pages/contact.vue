<template>
  <section>
    <div class="my-4 mx-auto px-4 md:px-12">

      <div v-if="pushedButton" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">Succesfully sold your soul.</strong>
        <span class="block sm:inline">Should've read the fine print. What do you mean there wasn't any?</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
      
      <span class="flex justify-center text-4xl">Contact</span>
      <div class="mx-auto w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-4" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/contact">
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
            <button @click="pushedButton = !pushedButton" type="submit" class="btn mt-3 bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full">
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