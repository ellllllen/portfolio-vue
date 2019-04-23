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
    <!-- <img
      class="image-thumbnail"
      v-if="article.image"
      :src="require('@/assets/images/articles/' + article.image)"
    />-->
  </div>
</template>

<script>
export default {
  props: ["article"]
};
</script>
