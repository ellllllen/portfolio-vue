<template>
  <div>
    <h2 class="main-title">{{ article.title }}</h2>
    <div class="mb-3">
      <i>
        Created:
        {{ this.moment(article.created_at).format("Y-MM-DD") }}
      </i>
      <br />
      <i>
        Last Updated:
        {{ this.moment(article.updated_at).format("Y-MM-DD") }}
      </i>
    </div>
    <div v-html="article.section"></div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["article"]
};
</script>
