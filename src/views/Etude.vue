<template>
  <div>
    <div class="container-fluid" v-if="activityOrSchool">
      <School :etudeName="$route.params.etudeName" />

      <div class="row justify-content-md-around activitiesList">
        <div class="col-md-6">
          <img
            @mouseover="addAnimation( [{element: 'img[name=PPE]', animation: 'flipOutY'}, {element: 'table[name=PPE]', animation: 'flipInY'}])"
            name="PPE"
            :src="require('@/assets/img/school/batiment-BTS.jpg')"
            class="img-fluid"
            alt="PPE"
          />
        </div>
        <Table name="PPE"></Table>

        <div class="col-md-6">
          <img
            @mouseover="addAnimation( [{element: 'img[name=stage]', animation: 'flipOutY'}, {element: 'table[name=stage]', animation: 'flipInY'}])"
            name="stage"
            :src="require('@/assets/img/school/batiment-UQAM.jpg')"
            class="img-fluid"
            alt="stage"
          />
        </div>
        <Table name="stage"></Table>
      </div>
    </div>

    <StagePPE :name="nameOfActivityClick" v-else />
  </div>
</template>

<script>
import $ from "jquery";
// Components
import School from "@/components/School.vue";
import StagePPE from "@/components/stage&PPE.vue";
import Table from "@/components/table.vue";

export default {
  name: "Etude",
  components: {
    StagePPE,
    School,
    Table,
  },
  data() {
    return {
      activityOrSchool: true,
      nameOfActivityClick: "",
      show: {},
    };
  },
  mounted() {
    this.checkActivityURL();
    this.setActivityOrSchool();
  },
  watch: {
    "$route.params.activity": function () {
      this.setActivityOrSchool();
    },
  },
  methods: {
    setActivityOrSchool() {
      if (this.$route.params.typeOfActivity && this.$route.params.activity) {
        this.activityOrSchool = false;
      } else {
        this.activityOrSchool = true;
      }
    },
    // resolve reloading page if client are in an activity
    checkActivityURL() {
      if (this.$route.params.activity)
        this.nameOfActivityClick = this.$route.params.activity;
    },
    // Function adding animation
    // [{element: queryEl, animation: AnimateCss}, {...}] length: 1 or 2
    addAnimation(args) {
      $(args[0].element).addClass(
        `animate__animated animate__${args[0].animation}`
      );

      if (args.length <= 1) return 0;

      $(args[0].element).bind("animationend", function () {
        $(args[1].element).addClass(
          `animate__animated animate__${args[1].animation}`
        );
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