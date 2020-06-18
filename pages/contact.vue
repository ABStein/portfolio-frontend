<template>
  <section>
    <div class="my-4 mx-auto px-4 md:px-12">
      <span class="flex justify-center text-4xl">Contact</span>
      <div class="mx-auto w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-4" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
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
            <button type="submit" class="btn mt-3 bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full">
              Send
            </button>
          </div>
        </form>
      </div>
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