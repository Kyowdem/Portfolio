<template>
  <div>
    <div class="container-fluid" v-if="activityOrSchool">
      <School :etudeName="$route.params.etudeName" />

      <div
        v-if="$route.params.etudeName == 'BTS'"
        class="row justify-content-md-around activitiesList"
      >
        <div class="col-md-6 col-lg-4">
          <Table name="PPE" title="Projet d'école"></Table>
        </div>

        <div class="col-md-6 col-lg-4">
          <Table name="stage" title="Stage en entreprise"></Table>
        </div>
      </div>

      <div
        v-if="$route.params.etudeName == 'UQAM'"
        class="row justify-content-md-around activitiesList"
      >
        <div class="col-md-6 col-lg-4">
          <Table name="ecole"></Table>
        </div>
      </div>
    </div>

    <StagePPE :name="nameOfActivityClick" v-else />
  </div>
</template>

<script>
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
  },
};
</script>

<style>
div.activitiesList {
  margin-top: 3em;
}

div[role="tooltip"] {
  background-color: #f0f8ff;
  color: #213243;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: bold;
}
</style>