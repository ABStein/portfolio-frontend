<template>
  <div class="container my-4 mx-auto px-4 md:px-12">
    <span class="flex justify-center text-4xl">Experience</span>
    <JobCard class="px-6 py-6" v-for="job in jobs" :key="job.id" :title="job.title" :job_description="job.job_description" :company="job.company" :employment_length="job.employment_length"/>
  </div>
</template>

<script>
import JobCard from '../components/JobCard'
export default {
  components: {
    JobCard
  },
  data() {
    return {
      jobs: [
        {
          title: "QA Automation Engineer",
          job_description: "Worked as the best QA Automation Engineer in the world using ruby with capybara/Airborne for UI and API testing.",
          company: "Dialogtech",
          employment_length: "February 2018 - December 2018"
        },
        {
          title: "Junior Backend Engineer",
          job_description: "Worked with super fun technology like AWS lambda, EC2, Cloudwatch, API Gateway. Mainly coding in Node.js using frameworks such as ExpressJS for routing and API creation, and the serverless framework to deploy those APIs in AWS. For databases, I used both NoSQL (DynamoDB) and MySQL (RDS).",
          company: "Dialogtech",
          employment_length: "January 2019 - December 2019"
        },
        {
          title: "Web Engineer",
          job_description: "I worked on WordPress plugin and theme development. I also worked on APIs using PHP and Laravel, as well as creating frontend functionality with React to better support the company's marketing goals",
          company: "Sprout Social",
          employment_length: "January 2019 - Present"
        },
      ]
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

