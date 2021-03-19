<template>
    <img
      :width="width"
      :src="require(`@/assets/img/icon/${imgName.toLowerCase()}-logo.png`)"
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

<style>
</style>