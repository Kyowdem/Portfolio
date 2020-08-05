<template>
  <div>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <div class="container-fluid school" v-if="activityOrSchool">
      <div class="row justify-content-md-center textCenter">
        <div class="col-md-12">
          <h1>{{$route.params.etudeName}}</h1>
        </div>
      </div>

      <div class="row justify-content-md-center">
        <div class="col-md-6 col-lg-4">
          <img :src="'/assets/img/'+this.etude.imgName" class="img-fluid" :alt="this.etude.imgName" />
        </div>
        <div class="col-md-6 offset-lg-2 col-lg-4">
          <p>{{etude.DescBackSchool}}</p>
        </div>
      </div>

      <div class="row justify-content-md-around">
        <div class="col-md-5" v-for="(activity, property) in activitiesName" :key="property">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>{{property}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="activity in activitiesName[property]" :key="activity">
                <th class="activity textClick" @click="goTo(property, activity)">{{activity}}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <StagePPE :name="nameOfActivityClick" v-else />
  </div>
</template>

<script src="https://unpkg.com/aos@next/dist/aos.js"></script>

<script>
import AOS from "aos";
// JSON
import etude from "@/assets/json/etude.json";
import schoolDesc from "@/assets/json/schoolDesc.json";
// Components
import StagePPE from "@/components/stage&PPE.vue";

export default {
  name: "Etude",
  components: {
    StagePPE,
  },
  data() {
    return {
      etude: etude[this.$route.params.etudeName],
      activityOrSchool: true,
      activitiesName: { PPE: [], stage: [] },
      nameOfActivityClick: ""
    };
  },
  mounted() {
    this.setActivityOrSchool();
    this.setActivitiesName();
  },
  watch: {
    "$route.params.activity": function () {
      this.setActivityOrSchool();
    },
  },
  methods: {
    setActivitiesName() {
      for (let prop in schoolDesc["BTS"]) {
        schoolDesc["BTS"][prop].forEach((el) =>
          this.activitiesName[prop].push(el.name)
        );
      }
    },
    setActivityOrSchool() {
      if (this.$route.params.typeOfActivity && this.$route.params.activity) {
        this.activityOrSchool = false;
      } else {
        this.activityOrSchool = true;
      }
    },
    goTo(property, activity) {
      this.nameOfActivityClick = activity;
      this.$router.push(
        `/etude/${this.$route.params.etudeName}/${property}/${activity}`
      );
    },
  },
};
AOS.init();
</script>

<style>
thead th {
  text-align: center;
  text-transform: capitalize;
  text-decoration: underline;
  cursor: default;
}
</style>