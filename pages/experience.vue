<template>
  <div class="max-w-900 mx-auto py-12">
    <div class="flex flex-col px-3 lg:pl-offset-8p self-center text-center lg:text-left lg:pt0 pt-8">
      <h1 class="lg:text-4xl text-3xl font-bold">Experience</h1>
      <div class="grid grid-cols-2 gap-3">
        <JobCard class="px-6 py-6" v-for="job in jobs" :key="job.id" :title="job.title" :job_description="job.job_description" :company="job.company" :employment_length="job.employment_length"/>
      </div>
    </div>
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
          title: "Web Engineer",
          job_description: "I worked on WordPress plugin and theme development. I also worked on APIs using PHP and Laravel, as well as creating frontend functionality with React to better support the company's marketing goals",
          company: "Sprout Social",
          employment_length: "January 2019 - Present"
        },
        {
          title: "Junior Backend Engineer",
          job_description: "Worked with super fun technology like AWS lambda, EC2, Cloudwatch, API Gateway. Mainly coding in Node.js using frameworks such as ExpressJS for routing and API creation, and the serverless framework to deploy those APIs in AWS. For databases, I used both NoSQL (DynamoDB) and MySQL (RDS).",
          company: "Dialogtech",
          employment_length: "January 2019 - December 2019"
        },
        {
          title: "QA Automation Engineer",
          job_description: "Worked as the best QA Automation Engineer in the world using ruby with capybara/Airborne for UI and API testing.",
          company: "Dialogtech",
          employment_length: "February 2018 - December 2018"
        }
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

