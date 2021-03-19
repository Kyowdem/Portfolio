<template>
  <div>
      {{title}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: ""
        }
    },
    mounted() {
        this.title = this.$route.params.project;
    }
}
</script>

<style>

</style>