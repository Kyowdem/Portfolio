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
    <div v-if="projectName == projects[4].name">
      <Realisation p="Dans le PPE, les tables et les colonnes pour le jeu d’essai étaient déjà existants dans un fichier au format SQL. Avant d’insérer les tables et les données, il fallait d’abord créer la base de données." :imgPath="['PPE/1ere_annee/create_database.png']"></Realisation>

      <Realisation p="Après avoir créé la base, j’ai ouvert le fichier .sql dans un éditeur de texte pour pouvoir copier coller tout le script des tables et du jeux d’essai dans MYSQL." :imgPath="['PPE/1ere_annee/scriptSQL.png','PPE/1ere_annee/inserts.png']"></Realisation>

      <Realisation p="Une suite de requête était demandée par l’entreprise, elle voulait par exemple savoir le prix moyen d’un bagel, une requête plutôt simple et courte." :imgPath="['PPE/1ere_annee/req2.png', 'PPE/1ere_annee/rep_req2.png']"></Realisation>

      <Realisation p="La requête du dessous est un peu plus longue car on voulait les ingrédients d’un bagel spécifique, « le chèvre miel »." :imgPath="['PPE/1ere_annee/req1.png', 'PPE/1ere_annee/rep_req1.png']"></Realisation>
    </div>
    <div v-if="projectName == projects[5].name">
      <Realisation p="Dans notre groupe, je me suis occupé de la partie design et dynamique du site. Pour cela, j’ai utilisé jQuery et Ajax. J’ai également utilisé la librairie slick, afin de produire un carrousel qui répondais à mes attentes et qui était très facile d’utilisation." :imgPath="['PPE/2eme_annee/Judge_movies/accueil.png']"></Realisation>

      <Realisation p="Mais pour voir un film et l’acheter il faut d’abord se connecter. Pour donner un rendu tout aussi simple que dynamique et en mettant surtout une petite touche de jaune aux pages login et inscription, j’ai paramétré un fond avec des particules animées dans un fond noir grâce à l’outil « particules.js »." :imgPath="['PPE/2eme_annee/Judge_movies/login.png']"></Realisation>

      <Realisation p="Une fois le login crée ainsi que la page d’accueil avec le carrousel des films, lors du clic il fallait afficher une page simple et semblable pour toute. Je me suis donc occupé de la page film en faisant une page qui envoyais directement le lien de la bande annonce du film, son titre, ces réalisateurs, ces acteurs et ça note sur le site." :imgPath="['PPE/2eme_annee/Judge_movies/film_haut.png']" pAfterImg="Sur la photo la balise iframe a juste un petit problème"></Realisation>

      <Realisation p="La page faisait juste charger les données depuis la base mais j’ai quand même voulu garder l’aspect dynamique alors j’ai juste rajouté des étoiles pour que l’utilisateur note sur 5 le film." :imgPath="['PPE/2eme_annee/Judge_movies/film_bas.png', 'PPE/2eme_annee/Judge_movies/code_etoile_film.png']"></Realisation>

      <Realisation p="En tant qu’admin nous pouvons rajouter des films et même cela est animé." :imgPath="['PPE/2eme_annee/Judge_movies/ajout_film.png']"></Realisation>

      <Realisation p="Si un Acteur n’est pas dans la liste, nous avons juste à cliquer sur le bouton à droite pour faire apparaitre un formulaire de saisie. Ce dernier ajoute l’acteur au select sans avoir à rafraichir la page, elle se charge automatiquement grâce à Ajax." :imgPath="['PPE/2eme_annee/Judge_movies/ajoute_real.png']"></Realisation>
    </div>
    <div v-if="projectName == projects[6].name">
      <Realisation p="J’ai commencé par faire la partie graphique du site avant de commencer tout le back-end. Je voulais que la page de recherche soit éducative, simple d’utilisation. J’ai alors mis une barre de recherche au milieu de l’écran et qui montera lorsqu’on saisit une information." :imgPath="['PPE/2eme_annee/GSB/barre_recherche.png', 'PPE/2eme_annee/GSB/recherche_visiteur.png']"></Realisation>

      <Realisation p="La recherche d’un visiteur se fait grâce à un web service où la méthode GET est utilisé. On envoie les données GET dans l’url en tapant simplement le nom de la page suivis d’un point d’interrogation, le nom de la variable et la donnée à envoyer. On peut aussi tester notre Api avec Postman qui est un environnement de développement pour les API." :imgPath="['PPE/2eme_annee/GSB/postman_visiteur_id.png']"></Realisation>

      <Realisation p="On récupère donc la variable “id“ dans le script read.php sous la forme d’une variable dans la collection $_GET. Pour me simplifier, je fais un parcours de celle-ci pour garder dans la variable $getVariable et pouvoir faire ensuite un switch case." :imgPath="['PPE/2eme_annee/GSB/controler_visiteur_read.png']"></Realisation>

      <Realisation p="On voit que lorsqu’il récupère l’Id il va dans la fonction “readById“ dans la classe “tableVisiteur“. Dans cette fonction on peut voir que la requête est préparée avant d’être exécutée et retournée vers le Controller read.php." :imgPath="['PPE/2eme_annee/GSB/metier_visiteur_update.png']" pAfterImg="Pour finir, le résultat de la requête est traité pour être convertie sous le format JSON. On peut maintenant récupérer le résultat de la requête, comme nous l’avons vu plus haut avec Postman."></Realisation>

      <Realisation p="Pour un ajout, une modification ou une suppression, c’est à peu près la même chose sauf qu’au lieu d’utiliser GET nous prendrons : POST pour un ajout, PUT pour une modification et DELETE pour une suppression. L’envoie de donnée ne se passe pas par l’url du web service mais par l’envoie des données en JSON et le traitement de ces données dans le Controller." :imgPath="['PPE/2eme_annee/GSB/postman_visiteur_update.png', 'PPE/2eme_annee/GSB/metier_visiteur_update.png', 'PPE/2eme_annee/GSB/modif_visiteur.png']"></Realisation>

      <Realisation p="Revenons à notre recherche. Après avoir fait la recherche par nom nous avons une collection de visiteur que je stock dans une variable locale pour réutiliser les données. Je fais ensuite un v-for pour parcourir tous les visiteurs et faire afficher le tableau." :imgPath="['PPE/2eme_annee/GSB/code_rechercher_visiteur.png']"></Realisation>
    </div>
    <div v-if="projectName == projects[7].name">
      <Realisation p="On m’a donné ce modèle UML." :imgPath="['ecole/INF3105/INF3105-Pile.png']"></Realisation>

      <Realisation p="A partir de ça, on a dû compléter chaque fonction" :imgPath="['ecole/INF3105/class_pile.png']"></Realisation>

      <Realisation p="On a ensuite étudié l’arbre AVL, ainsi que plusieurs arbres comme rouge-noir ou encore des arbres map. Pour l’instant, l’arbre rouge-noir est celui que je n’ai pas implémenter mais que j’ai quand même pu apprendre schématiquement et logiquement. Encore une fois on nous a donner un modèle UML pour l’arbre AVL." :imgPath="['ecole/INF3105/INF3105-ArbreAVL.png']"></Realisation>

      <Realisation p="L’arbre AVL a été assez dur à implémenter à cause des concepts avancer du C++, comme les pointeurs, les références, des Template grâce au type T et d’autre détails du au compilateur ou directement au langage. La fonction la plus compliquer a été l’insertion, ainsi que les rotations, du a l’arbre qui se veut comme ça. Le code de l’insertion est surtout basé sur un équilibrage et donc des rotations." :imgPath="['ecole/INF3105/class_arbreAVL-insertion.png']"></Realisation>
    </div>
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