<template>
  <footer class="my-4 mx-auto px-4 md:px-12">
    <div class="mx-auto w-full max-w-sm">
      <div class="about-me flex justify-center items-center text-center px-4 pt-4 pb-4 flex flex-col mx-2 my-2 text-gray-600">
        <span class="text-xl mb-2 underline">About</span>
        Andrew Stein is a Software Engineer who lives in Chicago. Some of his skills include Full-stack development as well as some light Devops. His speciality is in backend development in Node.js or Ruby as well as a passion for all things Vue/Nuxt. 
      </div>
      <div class="contact-info px-4 pt-4 pb-4 flex justify-center items-center flex-col mx-2 my-2">
        <div class="text-xl mb-2">
          <span class="text-xl px-2 py-1 underline text-gray-600">Social Media</span>
        </div>
        <div class="flex flex-row">
          <a href="https://github.com/ABStein" class="text-xl px-2 py-1 text-gray-600 fab fa-github-alt"></a>
          <a href="https://medium.com/@ABStein" class="text-xl px-2 py-1 text-gray-600 fab fa-medium"></a>
          <a href="https://www.linkedin.com/in/andrew-stein-755b8b11a" class="text-xl px-2 py-1 text-gray-600 fab fa-linkedin"></a>
        </div>
      </div>      
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>