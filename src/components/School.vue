<template>
  <div>
    <div class="row justify-content-md-center textCenter">
      <div class="col-md-12">
        <h1>{{etudeName}}</h1>
      </div>
    </div>

    <div class="row justify-content-md-center">
      <div class="col-md-6 col-lg-4">
        <img
          :src="require('@/assets/img/school/'+this.etude.imgName)"
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
  props: {
      etudeName: String
  },
  data() {
    return {
      etude: etude[this.etudeName],
    };
  },
  watch: {
    "$route.params.etudeName": function () {
      this.etude = etude[this.etudeName]
    },
  },
};
</script>

<style>
</style>