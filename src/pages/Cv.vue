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
  </div>

  <!-- //    @if($articles->count() > 0)
        <div class="articles">
            <h3 class="text-primary">Articles About Me</h3>
            <p>So sometimes I like to write a bit about non-techy things that I like or have done, these articles
                appear here.</p>
            @foreach($articles as $article)
                @include('articles._article')
            @endforeach
        </div>
  @endif-->
</template>

<script>
export default {
  name: "about-me"
};
</script>

<style lang="scss" scoped>
.about-me {
  text-align: justify;
  padding: 1rem;
  line-height: 1.4rem;
}
</style>
