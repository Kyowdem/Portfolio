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
        <Summary
          v-for="prt in Portfolio"
          :key="prt.title"
          :title="prt.title"
          :describe="prt.describe"
          :filters="prt.filters"
          :date="prt.date"
        ></Summary>
      </div>
    </div>
  </div>
</template>

<script>
import Summary from "@/components/Summary.vue";
import Portfolio from "@/assets/json/portfolio.json";

export default {
  name: "Portfolio",
  components: {
    Summary,
  },
  data() {
    return {
      Portfolio,
      filters: ["vue.js", "javascript", "HTML", "CSS", "SQL", "C#", "C++"],
      selectedFilter: "",
    };
  },
  watch: {
    selectedFilter: function () {
      this.filterPortfolio();
    },
  },
  mounted() {
    // this.setFiltersByPortfolio();
  },
  methods: {
    // Set all filters through filter in portfolio
    setFiltersByPortfolio() {
      var filtersPortfolio = [];

      this.Portfolio.forEach((prt) => {
        filtersPortfolio = filtersPortfolio.concat(prt.filters);
      });

      this.filters = [...new Set(filtersPortfolio)];
    },
    // When filter changed, reload portfolio
    filterPortfolio() {
      this.Portfolio = require("@/assets/json/portfolio.json");
      var selectedFilter = this.selectedFilter;

      if (this.selectedFilter)
        this.Portfolio = this.Portfolio.filter((prt) =>
          prt.filters.some((filter) => filter == selectedFilter)
        );
    },
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