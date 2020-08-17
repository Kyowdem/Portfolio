<template>
  <div class="col-md-4">
    <div>{{ name }} :</div>
    <div>
      <div class="progress">
        <div :id="name" :title="progression" class="progress-bar bg-warning" role="progressbar" style="width: 0%"></div>
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
      progression: (0 < this.level ? this.level : 0) && (this.level < 20 ? this.level : 20),
    };
  },
  mounted() {
    this.setLevelTo100();
  },
  methods: {
    setLevelTo100() {
      $(".progress-bar").css("width", `0%`);
      setTimeout(() => {
        $(`div[id="${this.name}"]`).css("width", `${this.progression * 5}%`);
      }, 500);
    },
  },
};
</script>

<style>
</style>