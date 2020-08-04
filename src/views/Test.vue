<template>
  <div>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <!-- <StagePPE name="Le maquetage des pages" /> -->
      <StagePPE name="Ajax, le chargement des pages" />
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