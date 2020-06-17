<template>
  <div class="container my-4 mx-auto px-4 md:px-12">
    <span class="flex justify-center text-4xl">Projects</span>
    <ProjectCard class="px-6 py-6" v-for="project in projects" :key="project.id" :project_title="project.project_title" :project_description="project.project_description" :repo="project.repo" :live_site="project.live_site"/>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard'
import projectsQuery from "../apollo/queries/project/projects";
import axios from "axios";
export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [],
      query: ""
    };
  },
  apollo: {
    projects: {
      prefetch: true,
      query: projectsQuery
    }
  },
  async created() {
    try {
      this.projects.filter((project) => {
        const res = project.includes(this.query)
        this.projects = res
      })
    } catch (err) {
      return err.stack;
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
