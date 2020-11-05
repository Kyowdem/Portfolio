<template>
  <div data-aos="fade-right" class="row justify-content-center">
    <div class="col-lg-12 col-md-12">
      <p>{{p}}</p>
    </div>

    <div v-for="img in imgPath" :key="img" :class="classImg">
      <img
        :src="
          require('@/' + startImgPath + img)
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
        imgPath: Array,
        pAfterImg: String
    },
    data() {
        return {
            startImgPath: "assets/img/school/",
            classImg: "col-lg-12 col-md-12"
        }
    },
    methods: {
      howManyImg() {
        if(this.imgPath.length >= 2)
          this.classImg = "col-lg-6 col-md-6"
      }
    },
    mounted() {
      if(!this.imgPath) return;
      this.howManyImg();
    },

};
</script>

<style>
</style>