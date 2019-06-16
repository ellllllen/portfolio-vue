<template>
  <div class="about-me">
    <h2 class="main-title">About Me</h2>
    Hi, I'm Ellen and I currently live in Cirencester, Gloucestershire working
    as a full time Developer. I graduated from Bournemouth University in 2010,
    gaining a 2:1 BSc (Hons) in Computing. I specialise in PHP, MySQL, HTML, CSS
    and JavaScript and have experience in developing using the
    <a href="https://laravel.com">Laravel</a>
    framework. I have been employed as a full time Developer for over
    {{ moment().diff(moment([2010, 5, 1]), "years") }} years.
    <br />
    <br />My hobbies include walking, photography, film and TV, music and Harry
    Potter.
    <br />
    <br />Here is my GitHub for your perusal:
    <a target="_blank" href="https://github.com/ellllllen"
      >https://github.com/ellllllen</a
    >

    <div v-show="articles.length > 0">
      <h3 class="text-primary">Articles About Me</h3>
      <p>
        So sometimes I like to write a bit about non-techy things that I like or
        have done, these articles appear here.
      </p>
      <div class="articles">
        <div
          v-bind:key="article.id"
          v-for="article in articles"
          class="article"
        >
          <a :href="'./articles/' + article.id">
            <h2>{{ article.title }}</h2>
            <img
              v-if="article.image"
              :src="require('@/assets/images/articles/' + article.image)"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataArticles from "@/data/articles.json";
export default {
  data() {
    return {
      articles: dataArticles.filter(function(data) {
        return data.about_me === true;
      })
    };
  }
};
</script>

<style lang="scss" scoped>
.about-me {
  text-align: justify;
  padding: 1rem;
  line-height: 1.4rem;

  .articles {
    display: flex;
    align-items: center;
    justify-content: center;

    .article {
      margin-right: 50px;
      text-align: center;
    }
    img {
      width: 100px;
    }
  }
}
</style>
