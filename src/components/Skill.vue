<template>
  <div>{{ name }} | {{ level }}</div>
</template>

<script>
export default {
  props: {
    name: String,
    level: Number
  }
};
</script>

<style>
</style>