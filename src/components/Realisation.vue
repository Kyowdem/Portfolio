<template>
  <div data-aos="fade-right" class="row">
    <div class="col-lg-12 col-md-12">
      <p>{{p}}</p>
    </div>
    <div class="col-lg-12 col-md-12">
      <img
        :src="
          require('@/' + this.StartImgPath + this.imgPath)
        "
        alt="controler_visiteur_read.png"
        class="img-fluid centerImg"
      />
    </div>
  </div>
</template>

<script>
export default {
    props: {
        p: String,
        imgPath: String
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