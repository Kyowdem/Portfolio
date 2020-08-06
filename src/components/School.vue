<template>
  <div>
    <div class="row justify-content-md-center textCenter">
      <div class="col-md-12">
        <h1>{{$route.params.etudeName}}</h1>
      </div>
    </div>

    <div class="row justify-content-md-center">
      <div class="col-md-6 col-lg-4">
        <img
          :src="require('@/assets/img/'+this.etude.imgName)"
          class="img-fluid"
          :alt="this.etude.imgName"
        />
      </div>
      <div class="col-md-6 offset-lg-2 col-lg-4">
        <p>{{etude.DescBackSchool}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import etude from "@/assets/json/etude.json";

export default {
  name: "School",
  data() {
    return {
      etude: etude[this.$route.params.etudeName],
    };
  },
  watch: {
    "$route.params.etudeName": function () {
      this.etude = etude[this.$route.params.etudeName]
      this.$parent.setActivitiesName();
    },
  },
};
</script>

<style>
</style>