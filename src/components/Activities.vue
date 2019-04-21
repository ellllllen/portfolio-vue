<template>
  <section class="activities">
    <h2>My Activities</h2>
    <div class="desc">
      These are my latest activities/randoms, I like to keep a track of what I'm
      doing/have done so I can refer back to them.
    </div>
    <div
      class="activity"
      v-bind:key="activity.id"
      v-for="activity in activities"
      v-show="activity.display"
    >
      <CalendarIcon v-bind:date="activity.startDate" />
      <div>
        <h4>
          <a
            class="text-secondary"
            :href="activity.titleLink"
            target="_blank"
            v-if="activity.titleLink"
            >{{ activity.title }}</a
          >
          <span class="text-secondary" v-else>{{ activity.title }}</span>
        </h4>
        <p class="card-text text-justify">{{ activity.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import CalendarIcon from "@/components/CalendarIcon.vue";
export default {
  name: "Activities",
  components: { CalendarIcon },
  data() {
    return {
      activities: [
        {
          id: 1,
          title: "React Bootcamp",
          description: "Following Tyler McGinnis React Bootcamp.",
          startDate: this.moment([2019, 0, 26]),
          titleLink: "/articles/11",
          display: true
        },
        {
          id: 2,
          title: "Added Chatbot to Personal Website",
          description:
            "Using the BotMan plugin I created a chatbot that tells my visitors some jokes.",
          startDate: this.moment([2018, 11, 16]),
          titleLink: "/articles/12",
          display: true
        },
        {
          title: "Travis CI (Part 2)",
          description:
            "Managed to implement Browser tests using Travis CI on my personal website. Also added Travis CI to my other repositories.",
          startDate: this.moment([2018, 11, 1]),
          titleLink: "https://travis-ci.com/ellllllen",
          display: true
        },
        {
          title: "Travis CI (Part 1)",
          description: "Implemented Travis CI on my personal website.",
          startDate: this.moment([2018, 10, 11]),
          titleLink: "https://travis-ci.com/ellllllen/personal-website",
          display: true
        },
        {
          title: "Continuous Integration",
          description:
            "Now I've lots of automated tests I am now researching and implementing continuous integration and deployment (CI and CD).",
          startDate: this.moment([2018, 8, 1]),
          titleLink: "/articles/10",
          display: true
        },
        {
          title: "Automated Testing",
          description:
            "Researching and implementing automated testing. So writing loads unit, feature and browser tests for my personal website.",
          startDate: this.moment([2018, 6, 21]),
          titleLink: "https://github.com/ellllllen/personal-website",
          display: true
        },
        {
          title: "Scalable Microservices with Kubernetes",
          description:
            "Free Udacity Course, learning to containerise applications with Docker and Kubernetes.",
          startDate: this.moment([2018, 6, 10]),
          titleLink:
            "https://eu.udacity.com/course/scalable-microservices-with-kubernetes--ud615",
          display: true
        },
        {
          title: "Chatbot",
          description:
            "Started following a tutorial on how to build a chatbot in PHP using Laravel and Botman.",
          startDate: this.moment([2018, 6, 6]),
          titleLink: "https://github.com/ellllllen/chatbot",
          display: true
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
.activities {
  text-align: justify;
  padding: 1rem;
  line-height: 1.4rem;

  .desc {
    margin-bottom: 15px;
  }

  .activity {
    display: flex;
    margin-bottom: 10px;

    h4 {
      margin: 0;
    }

    p {
      margin-top: 0;
    }

    a {
      color: $blue;
    }
  }
}
</style>
