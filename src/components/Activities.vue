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
      <CalendarIcon v-bind:date="moment(activity.startDate)" />
      <div>
        <h4>
          <a
            class="text-secondary"
            :href="activity.titleLink"
            :target="activity.external"
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
import dataActivities from "@/data/activities.json";

export default {
  components: { CalendarIcon },
  data() {
    return {
      activities: dataActivities.sort(function(a, b) {
        return b.id - a.id;
      })
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
.activities {
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
