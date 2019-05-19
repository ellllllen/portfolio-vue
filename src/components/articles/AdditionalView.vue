<template>
  <div v-if="article.id == 4">
    <Books></Books>
  </div>
</template>

<script>
import Books from "@/components/articles/Books.vue";
export default {
  props: ["article"],
  components: {
    Books
  }
};
</script>
