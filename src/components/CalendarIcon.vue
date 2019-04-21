<template>
  <div class="calendar">
    <span class="day">{{ date.format("DD") }}</span>
    <span class="month">{{ date.format("MMM") }}</span>
  </div>
</template>

<script>
export default {
  props: ["date"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
.calendar {
  background: #fcfcfc;
  text-align: center;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border: 1px solid #d2d2d2;
  width: 60px;
  margin-right: 10px;
  .day {
    font-size: 1.4rem;
    padding: 7px 15px 7px 15px;
    display: block;
    font-weight: bold;
  }
  .month {
    border-top: 3px solid #d2d2d2;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    display: block;
    padding: 1px 15px;
    border-radius: 0 0 10px 10px;
    -moz-border-radius: 0 0 10px 10px;
    -webkit-border-radius: 0 0 10px 10px;
    background: $pink;
  }
}
</style>
