<template>
  <div>
    <div>{{ name }} | {{ level }}</div>
    <div class="progress">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 0%"></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  props: {
    name: String,
    level: Number, // 0 < level < 20
  },
  mounted() {
    this.setLevelTo100();
  },
  methods: {
    setLevelTo100() {
      let progressBar = this.level * 5;
      $(".progress-bar").css("width", `${progressBar}%`);
    },
  },
};
</script>

<style>
</style>