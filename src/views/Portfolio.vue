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
    <div class="row project">bar</div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      filters: ["vue.js", "javascript", "HTML", "CSS", "SQL"],
      selectedFilter: "",
    };
  },
};
</script>

<style>
</style>