<template>
  <div>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <!-- <StagePPE name="Le maquetage des pages" /> -->
      <!-- <StagePPE name="Ajax, le chargement des pages" /> -->
      <!-- <StagePPE name="Signalement d'une erreur, popup" /> -->
      <!-- <StagePPE name="Lire une facture avec nodeJs et Tesseract" /> -->
      <!-- <StagePPE name="Mission n°1 : Music Gone's" /> -->
      <!-- <StagePPE name="Mission n°2 : Duch’Bagels" /> -->
      <!-- <StagePPE name="Mission n°1 : Judge Movies" /> -->
      <StagePPE name="Mission n°2 : GSB" />
  </div>
</template>

<script src="https://unpkg.com/aos@next/dist/aos.js"></script>

<script>
import AOS from 'aos';
import StagePPE from '@/components/stage&PPE.vue'

export default {
    name: 'Test',
    components: {
        StagePPE
    }
}

AOS.init();
</script>

<style>

</style>