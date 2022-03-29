<template>
  <div class="max-w-900 mx-auto py-12">
    <div class="flex flex-col px-3 lg:pl-offset-8p self-center text-center lg:text-left lg:pt0 pt-8">
      <h1 class="lg:text-4xl text-3xl font-bold">Projects</h1>
      <div class="grid grid-cols-3 gap-3">
        <ProjectCard v-for="project in projects" :key="project.id" :project_title="project.project_title" :project_description="project.project_description" :repo="project.repo" :live_site="project.live_site" />
      </div>
    </div>
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
        },
        {
          project_title: "Weather App",
          project_description: "Gives you the current weather at your location.\n\nTechnologies used\n- Express.JS\n- WeatherStack API\n- Darksky API",
          repo: "https://github.com/ABStein/weather-web-server",
          live_site: "https://stein-weather-app.herokuapp.com/",
        },
        {
          project_title: "Weather App",
          project_description: "Gives you the current weather at your location.\n\nTechnologies used\n- Express.JS\n- WeatherStack API\n- Darksky API",
          repo: "https://github.com/ABStein/weather-web-server",
          live_site: "https://stein-weather-app.herokuapp.com/",
        },
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
