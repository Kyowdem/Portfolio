<template>
  <div>
    {{ projectName }}
    <div v-if="projectName == projects[0].name">
      <Realisation p="J’ai fait une première page avec le peu de donnée que l’on m’avait dit avec de simple carré et du texte dedans." :imgPath="['stage/1ere_annee/premiere_page.png']"></Realisation>

      <Realisation p="Une première page peut être trop simple pour les personnes venant des Ressources Humaine j’ai donc dû la refaire et j’ai finis par faire ça" :imgPath="['stage/1ere_annee/accueil(menuOuvert).png']"></Realisation>

      <Realisation p="Une page simple avec la possibilité de faire de sous menu j’ai montré ça aux RH et le code à mon tuteur puis il m’a dit de tout refaire mais en orienté objet. J’ai eu beaucoup de mal au début puis j’y ai pris gout et toute cette première page était en objet" :imgPath="['stage/1ere_annee/Atom_code_accueil.png']"></Realisation>

      <Realisation p="Un ajout, une modification ou une suppression à la fois simple et rapide tout était fait pour que le développeur fasse simplement ce qu’il voulait. Il fallait donc ensuite continuer comme cela et faire la suite de ce site, j’ai commencé par faire l’entrée d’une personne dans l’entreprise, mais avant de commencer j’ai demandé les attentes de mon tuteur, soit, une page qui reste la même cela sera seulement un remplacement de div que l’on fera avec Ajax (Voir dans le 2eme contexte). J’ai alors produis cela" :imgPath="['stage/1ere_annee/entre.png']"></Realisation>

      <Realisation p="Enfin ça c’était le screen final, nous ne voyons pas mais grâce à jQuery j’ai pu faire quelque animation qui était aussi là pour faire camoufler le temps de chargement de la prochaine div" :imgPath="['stage/1ere_annee/RTT.png']"></Realisation>

      <Realisation p="Je n’ai plus le code mais cette page était elle aussi complètement en objet. On pouvait dans le code sélectionner les jours et ou les demi-journée qu’on voulait griser simplement en tapant le nom de la journée."></Realisation>
    </div>
    <div v-if="projectName == projects[1].name">
      <Realisation p="J’ai beaucoup utilisé la documentation de jQuery et d’Ajax, qui sont très bien faites. La présence de mon tuteur m’a aussi permis de mieux m’initier là-dedans."></Realisation>

      <Realisation p="Après plusieurs modifications, cette page était utilisée comme principale pour le site. Cette dernière complètement orienté objet permet la facilité au futur modification qu’ils voudront apporter." :imgPath="['stage/1ere_annee/accueil(menuOuvert).png']"></Realisation>

      <Realisation p="Dans ce menu, quand on allait dans un contexte, par exemple une entrée, on se retrouvait sur cette page qui étais généré complètement en JavaScript et faisais charger les données des menus déroulant grâce à Ajax, car nous avions besoin de charger les données sans recharger la page." :imgPath="['stage/1ere_annee/entre.png']"></Realisation>

      <Realisation p="Je pouvais ensuite me rediriger vers les autres pages lors d’un clic sur le bouton suivant ou précédent, sans changer de page c'était juste un remplacement de div, et donc lorsque je cliquais cela faisais charger grâce à Ajax les données de la page concerné." :imgPath="['stage/1ere_annee/equipement.png']"></Realisation>

      <Realisation p="On peut voir sur un bout de code ci-dessous où lors d’un clic, Ajax allais faire charger la page souhaité." :imgPath="['stage/1ere_annee/ajax_code.png']"></Realisation>
    </div>
    <div v-if="projectName == projects[2].name">
      <Realisation p="Au début je n’étais pas partie sur un pop-up mais sur une page entière, mais j’ai trouvé ça trop lourd et moins intuitif pour l’utilisateur alors j’ai changé en utilisant le pop-up appeler aussi dialog, de jQuery-ui." :imgPath="['stage/2eme_annee/ouverture_dialog.png']"></Realisation>

      <Realisation p="Il fallait ensuite bien organiser tout ça, j’ai donc utilisé les mêmes titres que les Tabs qu’on peut voir au-dessus du dialog et il y avait même déjà toute l’architecture alors j’ai utilisé ça pour produire la suite." :imgPath="['stage/2eme_annee/modif_date.png']"></Realisation>

      <Realisation p="On peut aussi voir le datapicker de jQuery-ui que j’ai utilisé à chaque fois que le mot date apparaissant dans la sous-catégorie (Contexte = Situation de famille, Sous-catégorie = Date[…]changement, on ne voit pas la catégorie sur ce screen) J’ai donc ensuite pris toute ces informations et je les ai ajoutés à la base de données qu’on avait créée." :imgPath="['stage/2eme_annee/ajout_donnees_enfant.png']"></Realisation>

      <Realisation p="Le code que j’ai fait a principalement été fait en orienté objet mais aussi aspect pour permettre de gérer chaque objet qui sera créé, cela permet d’éviter le mot clé new mais surtout de centralisé tous les objets dans un objet mère." :imgPath="['stage/2eme_annee/code_create_select.png']"></Realisation>
    </div>
    <div v-if="projectName == projects[3].name">
      <Realisation p="Avant de commencer à coder, j’ai modéliser un MLR grâce à une ancienne application que l’entreprise avait développée, c’est alors à partir de ça que j’ai fait toute les entités et que j’ai finis et valider par mon tuteur le MLR qui ressemblais à ça." :imgPath="['stage/2eme_annee/MCD.png']"></Realisation>

      <Realisation p="J’ai ensuite bien pris le temps de me renseigner sur NodeJs car pour lancer un exe je n’avais pas le choix de l’utiliser, et c’est sur YouTube avec les tutoriels de grafikart, qui sont d’une clarté extrême. Après 2 jours, je me suis enfin lancé et j’ai commencé par essayer de lancer Tesseract avec l’invite de commande" :imgPath="['stage/2eme_annee/launch_tesseract_with_cmd.png']"></Realisation>

      <Realisation p="On lance le logiciel, on lui dit l’image à prendre et enfin le chemin de sortie du fichier texte. Maintenant que je sais comment l’utiliser, je vais faire mon programme JavaScript pour qu’il soit lancé par NodeJS. J’ai utilisé la fonction 'spawn' qui permet de lancer programme."></Realisation>

      <Realisation p="J’ai alors pris des tickets de caisse sur internet pour faire des tests et après que c’est dernier étaient concluant, j’ai pris mes photos sur le téléphone et je me suis aperçu qu’elles étaient automatiquement penchées, alors j’ai cherché un programme déjà fais par la communauté pour retourner automatiquement ma photo. Mon code donnait à la fin ça :" :imgPath="['stage/2eme_annee/code_start_tesseract.png']"></Realisation>

      <div data-aos="fade-right" class="row">
        <div class="col-lg-6 col-md-6">
          <div>
            <p>J’ai pris cette facture</p>
          </div>
          <img
            :src="
              require('@/' +
                this.imgSchPath +
                'stage/2eme_annee/ticket_caisse.png')
            "
            alt="ticket_caisse.png"
            class="img-fluid"
            width="350px"
          />
        </div>
        <div class="col-lg-6 col-md-6">
          <p>et le résultat de Tesseract donnait ça</p>
          <img
            :src="
              require('@/' +
                this.imgSchPath +
                'stage/2eme_annee/texte_stdout.png')
            "
            alt="texte_stdout.png"
            class="img-fluid"
          />
        </div>
      </div>

      <Realisation p="Avec mon tuteur on s’est aperçu que souvent le prix était affiché plusieurs fois sur une facture alors ma fonction avait pour but de prendre tous les chiffres du fichier texte, pour prendre ensuite le chiffre qui apparaissait le plus de fois j’ai alors écrit ma fonction, lancer mon script et il retournait ça" :imgPath="['stage/2eme_annee/resultat_tesseract.png']"></Realisation>

      <Realisation p="Une première ligne disant que le fichier est déjà droit alors pas besoin de le retourner, il m’affiche en second le prix et le reste se sont simplement des indications qui explique que le programme a été arrêter et que le fichier texte a bien été supprimer."></Realisation>
    </div>
    <div v-if="projectName == projects[4].name">Foo</div>
    <div v-if="projectName == projects[5].name">Foo</div>
    <div v-if="projectName == projects[6].name">Foo</div>
    <div v-if="projectName == projects[7].name">Foo</div>
  </div>
</template>

<script>
import Realisation from "@/components/Realisation.vue";
import schoolDesc from "@/assets/json/schoolDesc.json";
import projects from "@/assets/json/projects.json";

export default {
  name: "Project",
  components: {
    Realisation,
  },
  data() {
    return {
      schoolDesc,
      projects,
      projectName: "",
    };
  },
  mounted() {
    this.projectName = this.$route.params.project;   
  },
};
</script>

<style>
</style>