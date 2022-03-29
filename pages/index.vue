<template>
  <section class="pt-12">
    <div class="max-w-900 mx-auto py-12">
      <div class="flex lg:flex-row flex-col justify-between">
        <div class="flex flex-col lg:max-w-50p max-w-83p px-3 lg:pl-offset-8p self-center text-center lg:text-left lg:pt0 pt-8">
          <h2 class="lg:text-4xl text-3xl font-bold">
            Hi, I am Andrew, Software Developer
          </h2>
          <p class="text-gray-600 pt-6">
            I am is passionate Software Engineer who lives in Chicago. Some of my favorite things in tech are Node.js, Ruby, and a passion for all things Vue/Nuxt.
          </p>
          <a
            class="nav-link bg-primary hover:bg-primary_opacity text-white lg:text-xl mt-10 mb-4 py-2 px-4 rounded text-center lg:w-64 w-48 self-center lg:self-auto"
            href="https://drive.google.com/file/d/1Eyzk_0yh3L02jvqIwty2K03oAK09CcPD/view?usp=sharing"
            target="_blank"
          >
            Checkout My Resume
          </a>
        </div>

        <div class="lg:max-w-33p px-3 lg:pr-offset-8p self-center lg:order-last order-first">
          <img
            src="../assets/img/headshot.jpg"
            alt=""
            class="rounded-full h-40 w-40 lg:h-56 lg:w-56"
          />
        </div>
      </div>
    </div>
    <section class="bg-secondary_opacity py-12">
      <div class="max-w-900 mx-auto">
        <div class="flex flex-col">
          <div class="flex justify-between lg:max-w-full px-3">
            <div class="text-2xl">
              Recent Posts
            </div>
            <a class="nav-link text-lg self-center text-secondary hover:text-neutral-900" href="#">View All</a>
          </div>
          <div class="mt-4 flex lg:flex-row flex-col px-3">
            <div class="lg:max-w-50p max-w-83p mx-auto lg:mx-0 rounded-2xl bg-white p-12 lg:mr-8 my-4 drop-shadow-2xl">
              <div class="flex flex-col">
                <h2 class="text-2xl font-bold">Making a design system from scratch</h2>
                <p class="pt-4">
                  Lorem ipsum dolor sit amet dictum massa etiam velit. Gravida tempor suspendisse egestas tincidunt quis et posuere. Nulla consectetur cursus aliqua ultricies leo egestas dapibus. Fusce quam tempus lacus gravida a consectetur id. Nunc consequat tortor justo congue pharetra tristique pretium facilisi lobortis ultrices ac.
                </p>
              </div>
            </div>
            <div class=" lg:max-w-50p max-w-83p lg:mx-0 mx-auto rounded-2xl bg-white p-12 lg:ml-8 my-4 drop-shadow-2xl">
              <div class="flex flex-col">
                <h2 class="text-2xl font-bold">Making a design system from scratch</h2>
                <p class="pt-4">
                  Lorem ipsum dolor sit amet dictum massa etiam velit. Gravida tempor suspendisse egestas tincidunt quis et posuere. Nulla consectetur cursus aliqua ultricies leo egestas dapibus. Fusce quam tempus lacus gravida a consectetur id. Nunc consequat tortor justo congue pharetra tristique pretium facilisi lobortis ultrices ac.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
          content: "All Andrew all the time",
        },
      ],
    };
  },
};
</script>

