<template>
    <img
      :width="width"
      :src="require(`@/assets/img/icon/${imgName.toLowerCase()}-logo.png`)"
      class="img-fluid"
      :alt="imgName"
      :title="imgName"
    />
</template>

<script>
export default {
    props: {
        imgName: String,
        width: String
    }
};
</script>
r
<style>
</style>