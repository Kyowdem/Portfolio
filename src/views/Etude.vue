<template>
  <div>
    <div class="container-fluid" v-if="activityOrSchool">
      <School :etudeName="$route.params.etudeName" />

      <div class="row justify-content-md-around activitiesList">
        <div class="col-md-5" v-for="(activity, property) in activitiesName" :key="property">
          <table class="table table-hover" :name="property">
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

      <div class="row justify-content-md-around imgFlip">
        <div class="col-md-6">
          <img
            @mouseover="addAnimation('img[name=PPE]','table[name=PPE]', 'flipOutY', 'flipInY')"
            name="PPE"
            :src="require('@/assets/img/school/batiment-BTS.jpg')"
            class="img-fluid"
            alt="PPE"
          />
        </div>
      </div>
    </div>

    <StagePPE :name="nameOfActivityClick" v-else />
  </div>
</template>

<script>
import $ from "jquery";
// JSON
import schoolDesc from "@/assets/json/schoolDesc.json";
// Components
import School from "@/components/School.vue";
import StagePPE from "@/components/stage&PPE.vue";

export default {
  name: "Etude",
  components: {
    StagePPE,
    School,
  },
  data() {
    return {
      activityOrSchool: true,
      activitiesName: { PPE: [], stage: [] },
      nameOfActivityClick: ""
    };
  },
  mounted() {
    this.checkActivityURL();
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
      if (this.$route.params.etudeName == "BTS") {
        for (let prop in schoolDesc[this.$route.params.etudeName]) {
          schoolDesc[this.$route.params.etudeName][prop].forEach((el) =>
            this.activitiesName[prop].push(el.name)
          );
        }
      } else {
        for (let prop in this.activitiesName) {
          this.activitiesName[prop] = [];
        }
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
    // resolve reloading page if client are in an activity
    checkActivityURL() {
      if (this.$route.params.activity)
        this.nameOfActivityClick = this.$route.params.activity;
    },
    addAnimation(element1, element2, animation1, animation2) {
      console.dir($(element1));
      $(element1).addClass(`animate__animated animate__${animation1}`);
      $(element1).bind("animationend", function () {
        $(element2).addClass(`animate__animated animate__${animation2}`)
      });
    },
  },
};
</script>

<style>
thead th {
  text-align: center;
  text-transform: capitalize;
  text-decoration: underline;
  cursor: default;
}

div.activitiesList {
  margin-top: 3em;
}
</style>