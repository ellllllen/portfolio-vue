<template>
  <div class="container">
    <div class="tabs">
      <a
        href="#"
        class="tab"
        v-for="article in articles"
        v-bind:key="article.title"
        v-bind:class="{ 'tab-active': currentTab == article.id }"
        v-on:click="currentTab = article.id"
        >{{ article.title }}</a
      >
    </div>

    <div v-for="article in articles" v-bind:key="article.id">
      <Article v-bind:article="article" v-show="currentTab == article.id" />
    </div>
  </div>
</template>

<script>
import dataArticles from "@/data/articles.json";
import Article from "@/components/articles/article.vue";

export default {
  name: "Articles",
  data() {
    return {
      currentTab: this.getDefaultCurrentTab(),
      articles: dataArticles
    };
  },
  components: { Article },
  methods: {
    getDefaultCurrentTab() {
      if (this.$route.params.id) {
        return this.$route.params.id;
      } else {
        return dataArticles.reverse()[0].id;
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";

.tabs {
  text-align: center;

  .tab {
    padding: 0 0 0 10px;
    margin: 0 0 0 10px;
    color: $blue;
    border-left: solid 2px $grey;
  }

  .tab-active {
    color: $pink;
    font-weight: bold;
  }
}
</style>
