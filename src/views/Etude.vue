<template>
  <div>
    <div class="container-fluid" v-if="activityOrSchool">
      <School :etudeName="$route.params.etudeName" />

      <div class="row justify-content-md-around activitiesList">
        <div
          v-show="show.PPE"
          class="col-md-6 col-lg-4"
          @mouseleave="stopAnimation('PPE')"
          @mouseover="addAnimation(
              {name:'PPE', bool: false},
              [
                {element: 'img[name=PPE]', animation: 'flipOutY'},
                {element: 'table[name=PPE]', animation: 'flipInY'} 
              ]
            );"
        >
          <img name="PPE" :src="require('@/assets/img/school/PPE.jpg')" class="img-fluid" alt="PPE" />
        </div>
        <div
          class="col-md-6 col-lg-4"
          v-show="!show.PPE"
          @mouseleave="addAnimation(
            {name:'PPE', bool: true},
            [
              {element: 'table[name=PPE]', animation: 'flipOutY'}, 
              {element: 'img[name=PPE]', animation: 'flipInY'}
            ]
          );"
        >
          <Table name="PPE"></Table>
        </div>

        <div
          v-show="show.stage"
          class="col-md-6 col-lg-4"
          @mouseleave="stopAnimation('stage')"
          @mouseover="addAnimation(
              {name: 'stage', bool: false},
              [
                {element: 'img[name=stage]', animation: 'flipOutY'},
                {element: 'table[name=stage]', animation: 'flipInY'} 
              ]
            );"
        >
          <img
            name="stage"
            :src="require('@/assets/img/school/stage.jpg')"
            class="img-fluid"
            alt="stage"
          />
        </div>
        <div
          class="col-md-6 col-lg-4"
          v-show="!show.stage"
          @mouseleave="addAnimation( 
            {name: 'stage', bool: true},
            [
              {element: 'table[name=stage]', animation: 'flipOutY'},
              {element: 'img[name=stage]', animation: 'flipInY'}
            ]
          );"
        >
          <Table name="stage"></Table>
        </div>
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
import Table from "@/components/Table.vue";

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
      show: { stage: true, PPE: true },
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
    // show: {name: "", bool: true}
    // args: [{element: queryEl, animation: AnimateCss}, {...}] length: 1 or 2
    addAnimation(show, args) {
      $(args[0].element).addClass([
        "animate__animated",
        `animate__${args[0].animation}`,
      ]);

      $(args[0].element).bind("animationend", () => {
        // stop function when they have only one animation (args)
        if (args.length <= 1) return 0;

        // remove class if exist
        $(args[0].element).removeClass([
          "animate__animated",
          `animate__${args[0].animation}`,
        ]);
        this.show[show.name] = show.bool;

        $(args[1].element).addClass([
          "animate__animated",
          `animate__${args[1].animation}`,
        ]);

        $(args[0].element).unbind("animationend");
      });

      $(args[1].element).bind("animationend", () => {
        // remove class if exist
        $(args[1].element).removeClass([
          "animate__animated",
          `animate__${args[1].animation}`,
        ]);

        $(args[1].element).unbind("animationend");
      });
    },
    stopAnimation(element, animation = ["flipOutY", "flipInY"]) {
      if (!this.show[element]) return 0;
      this.show[element] = true;
      $(`img[name=${element}]`).removeClass([
        "animate__animated",
        `animate__${animation[0]}`,
        `animate__${animation[1]}`,
      ]);
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