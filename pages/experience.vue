<template>
  <div class="container my-4 mx-auto px-4 md:px-12">
    <span class="flex justify-center text-4xl">Experience</span>
    <JobCard class="px-6 py-6" v-for="job in jobs" :key="job.id" :title="job.title" :job_description="job.job_description" :company="job.company" :employment_length="job.employment_length"/>
  </div>
</template>

<script>
import JobCard from '../components/JobCard'
import jobsQuery from '../apollo/queries/job/jobs'
import axios from "axios";
export default {
  components: {
    JobCard
  },
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
        console.log(res.data)
        this.jobs = res.data
        console.log(this.jobs)
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

