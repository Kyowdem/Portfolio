<template>
  <div>
    <h3 class="titre">{{ title }}</h3>
    <p class="text">{{ describe }}</p>
    <div class="row">
      <div class="col-md-1 filter"><p>filter:</p></div>
      <div class="col-md-9 filters">
        <p v-for="filter in filters" :key="filter">{{ filter }}</p>
      </div>
      <div class="col-md-2 date">
        <p>{{ date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    describe: String,
    filters: Array,
    date: String,
  },
};
</script>

<style>
.project > div {
  background: rgba(128, 128, 128, 0.4);
  box-shadow: 5px 5px 5px grey;
}
.project .date {
  text-align: end;
}
.project .text {
  text-align: justify;
}
.project .titre,
.project .filter,
.project .filters {
  text-align: start;
}
</style>