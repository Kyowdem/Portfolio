<template>
  <div class="summary">
    <h3 class="titre">{{ title }}</h3>
    <p class="text">{{ describe }}</p>
    <div class="row">
      <div class="col-md-1 filter"><p>filtres:</p></div>
      <div class="col-md-9 filters">
        <ul>
          <li v-for="filter in filters" :key="filter">
            <img
              width="30px"
              :src="
                require(`@/assets/img/icon/${filter.toLowerCase()}-logo.png`)
              "
              :alt="filter"
              :title="filter"
            />
          </li>
        </ul>
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
div.summary {
  background: rgba(128, 128, 128, 0.4);
  box-shadow: 5px 5px 5px grey;
}

.summary .date {
  text-align: end;
}

.summary .text {
  text-align: justify;
}

.summary .titre,
.summary .filter,
.summary .filters {
  text-align: start;
}

.filters ul > li {
  display: inline;
}

.filters ul {
  padding: 0;
}

.filters ul > li:not(:last-child) {
  margin-right: 10px;
}
</style>