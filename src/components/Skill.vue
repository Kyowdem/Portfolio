<template>
  <div class="row justify-content-start">
    <div class="col-md-2">{{ name }} : </div>
    <div class="col-md-2">
      <div class="progress">
        <div class="progress-bar bg-warning" role="progressbar" style="width: 0%"></div>
      </div>
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