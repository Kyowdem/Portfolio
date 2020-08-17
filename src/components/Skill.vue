<template>
  <div class="row justify-content-start">
    <div class="col-md-2">{{ name }} :</div>
    <div class="col-md-2">
      <div class="progress">
        <div :id="name" class="progress-bar bg-warning" role="progressbar" style="width: 0%"></div>
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
  data() {
    return {
      // 0 < progression < 20
      progession: (0 < this.level ? this.level : 0) && (this.level < 20 ? this.level : 20),
    };
  },
  mounted() {
    this.setLevelTo100();
  },
  methods: {
    setLevelTo100() {
      $(".progress-bar").css("width", `0%`);
      setTimeout(() => {
        $(`div[id="${this.name}"]`).css("width", `${this.progession * 5}%`);
      }, 500);
    },
  },
};
</script>

<style>
</style>