<template>
  <div>
    <div class="container-fluid activity">
      <div class="row justify-content-lg-center textCenter">
        <div class="col-md-12">
          <h1>{{name}}</h1>
        </div>
      </div>

      <div class="row justify-content-lg-center">
        <div class="col-md-12 col-lg-8 explainActivity">
          <div data-aos="fade-right" v-if="$route.params.typeOfActivity == 'stage'">
            <h2>Présentation de l'entreprise</h2>
            <p>
              <a
                href="https://www.lmhabitat.fr/home/mieux-nous-connaitre/qui-sommes-nous/nos-missions.html"
                target="_blank"
                rel="noopener noreferrer"
              >Lyon Métropole Habitat</a> est une grande entreprise située sur plusieurs secteurs. Le siège de cette dernière se trouve dans le troisième arrondissement de Lyon. L’entreprise a pour but principal de vendre et de faire louer des appartements. Ils possèdent plusieurs secteurs tel que le secteur informatique ou les ressources humaines.
            </p>
          </div>

          <div data-aos="fade-right">
            <h2>Contexte</h2>
            <p>{{activity.contexte}}</p>
          </div>

          <div data-aos="fade-right">
            <h2>Besoin</h2>
            <p>{{activity.besoin}}</p>
          </div>

          <div data-aos="fade-right">
            <h2>Environnement technologique</h2>
            <p>{{activity['environnement technologique']}}</p>
          </div>

          <div class="realisation">
            <div data-aos="fade-right">
              <h2>Réalisation</h2>
            </div>
            <div v-if="name == 'Le maquetage des pages'">
              <div data-aos="fade-right" class="row">
                <div class="col-lg-12 col-md-12">
                  <p>J’ai fait une première page avec le peu de donnée que l’on m’avait dit avec de simple carré et du texte dedans.</p>
                </div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="@/assets/img/stage/1ere_annee/premiere_page.png"
                    alt="premiere_page.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div class="col-lg-12 col-md-12">
                  <p>Une première page peut être trop simple pour les personnes venant des Ressources Humaine j’ai donc dû la refaire et j’ai finis par faire ça</p>
                </div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="@/assets/img/stage/1ere_annee/accueil(menuOuvert).png"
                    alt="accueil(menuOuvert).png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div class="col-lg-12 col-md-12">
                  <p>Une page simple avec la possibilité de faire de sous menu j’ai montré ça aux RH et le code à mon tuteur puis il m’a dit de tout refaire mais en orienté objet. J’ai eu beaucoup de mal au début puis j’y ai pris gout et toute cette première page était en objet</p>
                </div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="@/assets/img/stage/1ere_annee/Atom_code_accueil.png"
                    alt="Atom_code_accueil.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div class="col-lg-12 col-md-12">
                  <p>Un ajout, une modification ou une suppression à la fois simple et rapide tout était fait pour que le développeur fasse simplement ce qu’il voulait. Il fallait donc ensuite continuer comme cela et faire la suite de ce site, j’ai commencé par faire l’entrée d’une personne dans l’entreprise, mais avant de commencer j’ai demandé les attentes de mon tuteur, soit, une page qui reste la même cela sera seulement un remplacement de div que l’on fera avec Ajax (Voir dans le 2eme contexte). J’ai alors produis cela</p>
                </div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="@/assets/img/stage/1ere_annee/entre.png"
                    alt="entre.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div class="col-lg-12 col-md-12">
                  <p>Enfin ça c’était le screen final, nous ne voyons pas mais grâce à jQuery j’ai pu faire quelque animation qui était aussi là pour faire camoufler le temps de chargement de la prochaine div</p>
                </div>
                <div class="col-lg-12 col-md-12">
                  <img src="@/assets/img/stage/1ere_annee/RTT.png" alt="rtt.png" class="img-fluid" />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div class="col-lg-12 col-md-12">
                  <p>Je n’ai plus le code mais cette page était elle aussi complètement en objet. On pouvait dans le code sélectionner les jours et ou les demi-journée qu’on voulait griser simplement en tapant le nom de la journée.</p>
                </div>
              </div>
            </div>

            <div v-if="name == 'Ajax, le chargement des pages'">
              <div data-aos="fade-right" class="row">
                <div
                  class="col-lg-12 col-md-12"
                >J’ai beaucoup utilisé la documentation de jQuery et d’Ajax, qui sont très bien faites. La présence de mon tuteur m’a aussi permis de mieux m’initier là-dedans.</div>
              </div>
              <div data-aos="fade-right" class="row">
                <div
                  class="col-lg-12 col-md-12"
                >Après plusieurs modifications, cette page était utilisée comme principale pour le site. Cette dernière complètement orienté objet permet la facilité au futur modification qu’ils voudront apporter.</div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="@/assets/img/stage/1ere_annee/accueil(menuOuvert).png"
                    alt="Accueil(menuOuvert).png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div
                  class="col-lg-12 col-md-12"
                >Dans ce menu, quand on allait dans un contexte, par exemple une entrée, on se retrouvait sur cette page qui étais généré complètement en JavaScript et faisais charger les données des menus déroulant grâce à Ajax, car nous avions besoin de charger les données sans recharger la page.</div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="@/assets/img/stage/1ere_annee/entre.png"
                    alt="Entre.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div
                  class="col-lg-12 col-md-12"
                >Je pouvais ensuite me rediriger vers les autres pages lors d’un clic sur le bouton suivant ou précédent, sans changer de page c'était juste un remplacement de div, et donc lorsque je cliquais cela faisais charger grâce à Ajax les données de la page concerné.</div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="@/assets/img/stage/1ere_annee/equipement.png"
                    alt="equipement.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div
                  class="col-lg-12 col-md-12"
                >On peut voir sur un bout de code ci-dessous où lors d’un clic, Ajax allais faire charger la page souhaité.</div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="@/assets/img/stage/1ere_annee/ajax_code.png"
                    alt="ajax_code.png"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div v-if="name == 'Signalement d\'une erreur, popup'">
              <div data-aos="fade-right" class="row">
                <div
                  class="col-lg-12 col-md-12"
                >Au début je n’étais pas partie sur un pop-up mais sur une page entière, mais j’ai trouvé ça trop lourd et moins intuitif pour l’utilisateur alors j’ai changé en utilisant le pop-up appeler aussi dialog, de jQuery-ui.</div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="@/assets/img/stage/2eme_annee/ouverture_dialog.png"
                    alt="Ouverture_dialog.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div
                  class="col-lg-12 col-md-12"
                >Il fallait ensuite bien organiser tout ça, j’ai donc utilisé les mêmes titres que les Tabs qu’on peut voir au-dessus du dialog et il y avait même déjà toute l’architecture alors j’ai utilisé ça pour produire la suite.</div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="@/assets/img/stage/2eme_annee/modif_date.png"
                    alt="modif_date.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div
                  class="col-lg-12 col-md-12"
                >On peut aussi voir le datapicker de jQuery-ui que j’ai utilisé à chaque fois que le mot date apparaissant dans la sous-catégorie (Contexte = Situation de famille, Sous-catégorie = Date[…]changement, on ne voit pas la catégorie sur ce screen) J’ai donc ensuite pris toute ces informations et je les ai ajoutés à la base de données qu’on avait créée.</div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="@/assets/img/stage/2eme_annee/ajout_donnees_enfant.png"
                    alt="ajout_donnees_enfant.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div
                  class="col-lg-12 col-md-12"
                >Le code que j’ai fait a principalement été fait en orienté objet mais aussi aspect pour permettre de gérer chaque objet qui sera créé, cela permet d’éviter le mot clé new mais surtout de centralisé tous les objets dans un objet mère.</div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="@/assets/img/stage/2eme_annee/code_create_select.png"
                    alt="code_create_select.png"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div v-if="name == 'Lire une facture avec nodeJs et Tesseract'">
              <div data-aos="fade-right" class="row">
                <div
                  class="col-lg-12 col-md-12"
                >Avant de commencer à coder, j’ai modéliser un MLR grâce à une ancienne application que l’entreprise avait développée, c’est alors à partir de ça que j’ai fait toute les entités et que j’ai finis et valider par mon tuteur le MLR qui ressemblais à ça.</div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="@/assets/img/stage/2eme_annee/MCD.png"
                    alt="MCD.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div
                  class="col-lg-12 col-md-12"
                >J’ai ensuite bien pris le temps de me renseigner sur NodeJs car pour lancer un exe je n’avais pas le choix de l’utiliser, et c’est sur YouTube avec les tutoriels de grafikart, qui sont d’une clarté extrême. Après 2 jours, je me suis enfin lancé et j’ai commencé par essayer de lancer Tesseract avec l’invite de commande</div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="http://hostName/src/assets/img/stage/2eme_annee/launch_tesseract_with_cmd.png"
                    alt="launch_tesseract_with_cmd.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div class="col-lg-12 col-md-12">
                  On lance le logiciel, on lui dit l’image à prendre et enfin le chemin de sortie du fichier texte. Maintenant que je sais comment l’utiliser, je vais faire mon programme JavaScript pour qu’il soit lancé par NodeJS. J’ai utilisé la fonction 'spawn' qui permet de lancer programme.
                  <br />J’ai alors pris des tickets de caisse sur internet pour faire des tests et après que c’est dernier étaient concluant, j’ai pris mes photos sur le téléphone et je me suis aperçu qu’elles étaient automatiquement penchées, alors j’ai cherché un programme déjà fais par la communauté pour retourner automatiquement ma photo. Mon code donnait à la fin ça :
                </div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="http://hostName/src/assets/img/stage/2eme_annee/code_start_tesseract.png"
                    alt="code_start_tesseract.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div class="col-lg-6 col-md-6">
                  <div>J’ai pris cette facture</div>
                  <img
                    src="http://hostName/src/assets/img/stage/2eme_annee/ticket_caisse.png"
                    alt="ticket_caisse.png"
                    class="img-fluid"
                    width="350px"
                  />
                </div>
                <div class="col-lg-6 col-md-6">
                  et le résultat de Tesseract donnait ça
                  <img
                    src="http://hostName/src/assets/img/stage/2eme_annee/texte_stdout.png"
                    alt="texte_stdout.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div
                  class="col-lg-12 col-md-12"
                >Avec mon tuteur on s’est aperçu que souvent le prix était affiché plusieurs fois sur une facture alors ma fonction avait pour but de prendre tous les chiffres du fichier texte, pour prendre ensuite le chiffre qui apparaissait le plus de fois j’ai alors écrit ma fonction, lancer mon script et il retournait ça</div>
                <div class="col-lg-12 col-md-12">
                  <img
                    src="http://hostName/src/assets/img/stage/2eme_annee/resultat_tesseract.png"
                    alt="resultat_tesseract.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div data-aos="fade-right" class="row">
                <div
                  class="col-lg-12 col-md-12"
                >Une première ligne disant que le fichier est déjà droit alors pas besoin de le retourner, il m’affiche en second le prix et le reste se sont simplement des indications qui explique que le programme a été arrêter et que le fichier texte a bien été supprimer.</div>
              </div>
            </div>
          </div>

          <div data-aos="fade-right">
            <h2>Bilan</h2>
            <p>{{activity.bilan}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import schoolDesc from "@/assets/json/schoolDesc.json";

export default {
  data() {
    return {
      schoolDesc,
      activity: Object,
    };
  },
  mounted() {
    this.activity = this.schoolDesc[this.$route.params.etudeName][
      this.$route.params.typeOfActivity
    ].find((element) => element.name == this.name).description;
  },
  props: {
    name: String,
  },
};
</script>

<style>
@media (min-width: 992px) {
  .activity .col-lg-8 {
    background-color: rgba(200, 200, 200, 0.1);
  }
}

.activity a {
  color: white;
  text-decoration: underline dotted gold;
  transition: 0.05s;
}
.activity a:hover {
  text-decoration: underline dotted gold;
}

.explainActivity > div:first-child {
  margin-top: 18rem;
}
.explainActivity > div:not(:first-child) {
  margin-top: 30rem;
}
.explainActivity > div:last-child {
  margin-bottom: 25rem;
}

.realisation > div div:not(:nth-child(1)):not(:nth-child(2)) {
  margin-top: 3rem;
}

thead th {
  text-align: center;
  text-transform: capitalize;
  text-decoration: underline;
  cursor: default;
}
</style>