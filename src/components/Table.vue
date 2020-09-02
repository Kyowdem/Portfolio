<template>
  <div>
    <table class="table table-hover" :name="name">
      <thead>
        <tr>
          <th>{{name}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="activity in activities" :key="activity.name">
          <th class="activity textClick" @click="goTo(name, activity.name)">{{activity.name}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      activities: require("@/assets/json/schoolDesc.json")[this.$route.params.etudeName][this.name]
    };
  },
  mounted() {},
  methods: {
    goTo(property, activity) {
      this.$parent.nameOfActivityClick = activity;
      this.$router.push(
        `/etude/${this.$route.params.etudeName}/${property}/${activity}`
      );
    },
  }
};
</script>

<style>
</style>