<template>
  <div>
    <div class="container-fluid" v-if="activityOrSchool">
      <School :etudeName="$route.params.etudeName" />

      <div class="row justify-content-md-around activitiesList">
        <div
          v-show="show.PPE"
          class="col-md-6 col-lg-4"
          @mouseover="animateTwoItems(
              [
                {query: 'img[name=PPE]', animation: 'flipOutY'},
                {query: 'table[name=PPE]', animation: 'flipInY'} 
              ],
              {name:'PPE', bool: false}
            );"
        >
          <img name="PPE" :src="require('@/assets/img/school/PPE.jpg')" class="img-fluid" alt="PPE" />
        </div>
        <div
          class="col-md-6 col-lg-4"
          v-show="!show.PPE"
          @mouseleave="animateTwoItems(
            [
              {query: 'table[name=PPE]', animation: 'flipOutY'}, 
              {query: 'img[name=PPE]', animation: 'flipInY'}
            ],
            {name:'PPE', bool: true}
          );"
        >
          <Table name="PPE"></Table>
        </div>

        <div
          v-show="show.stage"
          class="col-md-6 col-lg-4"
          @mouseover="animateTwoItems(
              [
                {query: 'img[name=stage]', animation: 'flipOutY'},
                {query: 'table[name=stage]', animation: 'flipInY'} 
              ],
              {name: 'stage', bool: false}
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
          @mouseleave="animateTwoItems( 
            [
              {query: 'table[name=stage]', animation: 'flipOutY'},
              {query: 'img[name=stage]', animation: 'flipInY'}
            ],
            {name: 'stage', bool: true}
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
    this.addAnimations("img[name=PPE]", "shakeY");
    this.addAnimations("img[name=stage]", "shakeY");
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
    // query: String, animation: Array
    addAnimations(query, animations) {
      $(query).addClass(
        "animate__animated" + " " + this.getAnimation(animations)
      );

      this.deleteAnimations(query, animations);
    },
    // query: String, animation: Array
    deleteAnimations(query, animations) {
      $(query).bind("animationend", () => {
        $(query).removeClass(
          "animate__animated" + " " + this.getAnimation(animations)
        );
        $(query).unbind("animationend");
      });
    },
    // animation: String or Array of string
    getAnimation(animations) {
      if (typeof animations == "string") animations = [animations];

      let animation = "";
      animations.forEach((element) => {
        animation += `animate__${element} `;
      });
      return animation.trim();
    },
    // elementShow: {name: "", bool: true}
    // items: [{query: queryElement, animation: Animate.css}, {...}].length: 2.
    animateTwoItems(items, elementShow) {
      this.addAnimations(items[0].query, items[0].animation);

      $(items[0].query).bind("animationend", () => {
        this.show[elementShow.name] = elementShow.bool;
        this.addAnimations(items[1].query, items[1].animation);
        $(items[0].query).unbind("animationend");
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