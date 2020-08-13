<template>
  <div>
    <div>{{ name }} | {{ level }}</div>
    <div class="rectangle"></div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    level: Number
  }
};
</script>

<style>
.rectangle {
  border: gold solid 10px
}
</style>