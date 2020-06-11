<template>
  <div>
    <h1>Projects</h1>
    
    <div class="project" v-for="project in projects" :key="project.id">
      <h3>Project Title</h3>
      <p>{{project.project_title}}</p>
      <br>
      <h3>Desciption</h3>
      <p>{{project.project_description}}</p>
    </div>
  </div>
</template>

<script>
import projectsQuery from "../apollo/queries/project/projects";
import axios from "axios";
export default {
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

<style>
.project {
  text-align: center;
  color: #fff;
  padding: 2rem;
  border: 1px solid #df49a6;
  border-radius: 15px;
  margin: 1rem;
  list-style: none;
}
</style>