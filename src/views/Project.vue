<template>
  <div>
    {{ projectName }}
    <div v-if="projectName == schoolDesc.UQAM.ecole[0].name">
      <Realisation
        p="On m’a donné ce modèle UML."
        :imgPath="['ecole/INF3105/INF3105-Pile.png']"
      ></Realisation>
      <Realisation
        p="A partir de ça, on a dû compléter chaque fonction"
        :imgPath="['ecole/INF3105/class_pile.png']"
      ></Realisation>
      <Realisation
        p="On a ensuite étudié l’arbre AVL, ainsi que plusieurs arbres comme rouge-noir ou encore des arbres map. Pour l’instant, l’arbre rouge-noir est celui que je n’ai pas implémenter mais que j’ai quand même pu apprendre schématiquement et logiquement. Encore une fois on nous a donner un modèle UML pour l’arbre AVL."
        :imgPath="['ecole/INF3105/INF3105-ArbreAVL.png']"
      ></Realisation>
      <Realisation
        p="L’arbre AVL a été assez dur à implémenter à cause des concepts avancer du C++, comme les pointeurs, les références, des Template grâce au type T et d’autre détails du au compilateur ou directement au langage. La fonction la plus compliquer a été l’insertion, ainsi que les rotations, du a l’arbre qui se veut comme ça. Le code de l’insertion est surtout basé sur un équilibrage et donc des rotations."
        :imgPath="['ecole/INF3105/class_arbreAVL-insertion.png']"
      ></Realisation>
    </div>
  </div>
</template>

<script>
import Realisation from "@/components/Realisation.vue";
import schoolDesc from "@/assets/json/schoolDesc.json";

export default {
  components: {
    Realisation,
  },
  data() {
    return {
      schoolDesc,
      projectName: ""
    };
  },
  mounted() {
    this.projectName = this.$route.params.project;
    console.dir(schoolDesc);
  },
};
</script>

<style>
</style>