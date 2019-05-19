<template>
  <div>
    <h2 class="main-title">{{ article.title }}</h2>
    <i>
      Created:
      {{ this.moment(article.created_at).format("Y-MM-DD") }}
    </i>
    <br />
    <i>
      Last Updated:
      {{ this.moment(article.updated_at).format("Y-MM-DD") }}
    </i>
    <div v-html="article.section"></div>
    <AdditionalView
      v-bind:article="article"
      v-show="article.additional_view"
    ></AdditionalView>
  </div>
</template>

<script>
import AdditionalView from "@/components/articles/AdditionalView.vue";

export default {
  props: ["article"],
  components: {
    AdditionalView
  }
};
</script>
