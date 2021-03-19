<template>
  <div class="summary">
    <div class="insideSummary">
      <h3 class="titre">{{ title }}</h3>
      <p class="text">{{ describe }}</p>
      <div class="row">
        <div class="col-md-1 filter"><p>filtres:</p></div>
        <div class="col-md-9 filters">
          <ul>
            <li v-for="filter in filters" :key="filter">
              <Logo width="30px" :imgName="filter"></Logo>
            </li>
          </ul>
        </div>
        <div class="col-md-2 date">
          <p>{{ date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  components: {
    Logo,
  },
  props: {
    title: String,
    describe: String,
    filters: Array,
    date: String,
  },
};
</script>

<style>
.insideSummary {
  padding: 10px;
}

div.summary:hover {
  transform: scale(1.05);
}

div.summary {
  background: rgba(128, 128, 128, 0.4);
  box-shadow: 5px 5px 5px grey;
  transition: all .5s ease;
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