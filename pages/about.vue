<template>
  <div>
    <h1>Work History</h1>
    
    <div class="job" v-for="job in jobs" :key="job.id">
      <h3>Job title</h3>
      <p>{{job.title}}</p>
      <br>
      <h3>Desciption</h3>
      <p>{{job.job_description}}</p>
      <br>
      <h3>Company</h3>
      <p>{{job.company}}</p>
      <br>
      <h3>Employment Length</h3>
      <p>{{job.employment_length}}</p>
    </div>
  </div>
</template>

<script>
import jobsQuery from '../apollo/queries/job/jobs'
import axios from "axios";
export default {
  data() {
    return {
      jobs: [],
      query: ""
    };
  },
  apollo: {
    jobs: {
      prefetch: true,
      query: jobsQuery
    }
  },
  async created() {
    try {
      this.jobs.filter((job) => {
        const res = job.includes(this.query)
        this.jobs = res
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
.job {
  text-align: center;
  color: #fff;
  padding: 1rem;
  border: 1px solid #df49a6;
  border-radius: 5px;
  margin: 1rem 0;
  list-style: none;
}
</style>