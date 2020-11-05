<template>
  <div data-aos="fade-right" class="row">
    <div class="col-lg-12 col-md-12">
      <p>On m’a donné ce modèle UML.</p>
    </div>
    <div class="col-lg-12 col-md-12">
      <img
        :src="
          require('@/' +
            this.imgSchPath +
            'PPE/2eme_annee/GSB/controler_visiteur_read.png')
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
        p: "",
        imgPath: ""
    }
};
</script>

<style>
</style>