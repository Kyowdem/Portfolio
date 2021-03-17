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
        <h3 class="titre">Titre</h3>
        <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum culpa voluptate eligendi tempore fuga, recusandae facilis voluptates modi eveniet veniam doloribus officia maiores dolor facere quae earum numquam optio sunt.</p>
        <div class="row">
          <div class="col-md-2 filter"><p>filter: </p></div>
          <div class="col-md-8"></div>
          <div class="col-md-2 date"><p>AAAA/MM/JJ</p></div>
        </div>
      </div>
    </div>
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
.project>div {
  background: rgba(128, 128, 128, 0.4);
  box-shadow: 5px 5px 5px grey;
}
.project .date {
  text-align: end
}
.project .text {
  text-align: justify;
}
.project .titre, .project .filter {
  text-align: start;
}
</style>