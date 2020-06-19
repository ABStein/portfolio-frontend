<template>
  <div class="container my-4 mx-auto px-4 md:px-12">
    <span class="flex justify-center text-4xl">Projects</span>
    <ProjectCard class="px-6 py-6" v-for="project in projects" :key="project.id" :project_title="project.project_title" :project_description="project.project_description" :repo="project.repo" :live_site="project.live_site"/>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard'
export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          project_title: "Weather App",
          project_description: "Gives you the current weather at your location.\n\nTechnologies used\n- Express.JS\n- WeatherStack API\n- Darksky API",
          repo: "https://github.com/ABStein/weather-web-server",
          live_site: "https://stein-weather-app.herokuapp.com/",
        }
      ],
    };
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
