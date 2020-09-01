<template>
  <div class="offset-md-1 col-md-5">
    <table class="table table-hover" :name="name">
      <thead>
        <tr>
          <th>{{name}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="activity in activities" :key="activity">
          <th class="activity textClick" @click="goTo(name, activity)">{{activity}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    activities: Array
  },
  data() {
    return {
      activitiesName: []
    };
  },
  methods: {
    goTo(property, activity) {
      this.nameOfActivityClick = activity;
      this.$router.push(
        `/etude/${this.$route.params.etudeName}/${property}/${activity}`
      );
    },
  }
};
</script>

<style>
</style>