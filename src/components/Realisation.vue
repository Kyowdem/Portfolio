<template>
  <div data-aos="fade-right" class="row">
    <div class="col-lg-12 col-md-12">
      <p>{{p}}</p>
    </div>
    <div v-if="imgPath" class="col-lg-12 col-md-12">
      <img
        :src="
          require('@/' + this.StartImgPath + this.imgPath)
        "
        alt="controler_visiteur_read.png"
        class="img-fluid centerImg"
      />
    </div>
    <div v-if="pAfterImg" class="col-lg-12 col-md-12">
      <p>{{pAfterImg}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        p: String,
        imgPath: String,
        pAfterImg: String
    },
    data() {
        return {
            StartImgPath: "assets/img/school/"
        }
    }
    
};
</script>

<style>
</style>