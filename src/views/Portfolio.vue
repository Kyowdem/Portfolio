<template>
  <div class="container">
    <div class="row filter">
      <div
        class="form-check form-check-inline"
        v-for="filter in filters"
        :key="filter"
      >
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          v-model="selectedFilter"
          :id="filter"
          :value="filter"
        />
        <label class="form-check-label" :for="filter">{{ filter }}</label>
      </div>
    </div>
    <div class="row project">
      <div class="col-md-12">
        <Summary title="Titre" describe="lorem ..." :filters="['C++']" date="AAAA/MM/JJ"></Summary>
      </div>
    </div>
  </div>
</template>

<script>
import Summary from '@/components/Summary.vue'

export default {
  name: "Portfolio",
  components: {
    Summary
  },
  data() {
    return {
      filters: ["vue.js", "javascript", "HTML", "CSS", "SQL", "C#", "C++"],
      selectedFilter: "",
    };
  },
};
</script>

<style>
.filter .form-check,
.filter .form-check > label,
.filter .form-check > input {
  cursor: pointer;
}
</style>