<template>
  <div>
      <div class="container-fluid activity">
      <div class="row justify-content-md-center textCenter">
        <div class="col-md-12">
          <h1>{{name}}</h1>
        </div>
      </div>

        <div
        class="col-md-12 col-lg-8 explainActivity"
        v-if="switchCase(activities[props].name[index])"
        >
        <div data-aos="fade-right" v-if="props == 'stage'">
            <h2>Présentation de l'entreprise</h2>
            <p>
                <a href="https://www.lmhabitat.fr/home/mieux-nous-connaitre/qui-sommes-nous/nos-missions.html" target="_blank" rel="noopener noreferrer">Lyon Métropole Habitat</a> est une grande entreprise située sur plusieurs secteurs. Le siège de cette dernière se trouve dans le troisième arrondissement de Lyon. L’entreprise a pour but principal de vendre et de faire louer des appartements. Ils possèdent plusieurs secteurs tel que le secteur informatique ou les ressources humaines.
            </p>
        </div>

        <div data-aos="fade-right">
            <h2>Contexte</h2>
            <p>
                Etant une grande entreprise, ils ont besoin de gérer des entrants, des sortants ou des migrations vers d’autres postes ou endroits. J’étais donc chargé de faire un site web interne à l’entreprise lié à la base de données que je montrerais prochainement. Je vais vous montrer uniquement ce que j’ai pu faire dans la rubrique entrée.
            </p>
        </div>

        <div data-aos="fade-right">
            <h2>Besoin</h2>
            <p>
                L'entreprise nécessitait une application, simple d'utilisation et de compréhension, permettant de suivre la trace d'une entrée ou d'une sortie d'une personne. Le produit sera utilisé par les Ressources Humaines.
            </p>
        </div>

        <div data-aos="fade-right">
            <h2>Environnement technologique</h2>
            <p>
                J'ai utilisé le logiciel Atom, très simple d'utilisation, et prenant peu de place sur le poste à ma disposition. J’ai majoritairement utilisé du JavaScript ainsi qu’un Framework au nom de jQuery. Le Framework permet non seulement de réduire le code JS mais également d’utiliser Ajax, nous le verrons dans le second contexte.
            </p>
        </div>

        <div data-aos="fade-right">
            <h2>Réalisation</h2>
            <div data-aos="fade-right" class="row">
                <div class="col-lg-12 col-md-12">
                    <p>J’ai fait une première page avec le peu de donnée que l’on m’avait dit avec de simple carré et du texte dedans.</p>
                </div>
                <div class="col-lg-12 col-md-12"> <img src="http://hostName/src/assets/img/stage/1ere_annee/premiere_page.png" alt="premiere_page.png" class="img-fluid"></div>
            </div>
            <div data-aos="fade-right" class="row">
                <div class="col-lg-12 col-md-12">
                    <p>Une première page peut être trop simple pour les personnes venant des Ressources Humaine j’ai donc dû la refaire et j’ai finis par faire ça</p>
                </div>
                <div class="col-lg-12 col-md-12"> <img src="http://hostName/src/assets/img/stage/1ere_annee/accueil(menuOuvert).png" alt="accueil(menuOuvert).png" class="img-fluid"></div>
            </div>
            <div data-aos="fade-right" class="row">
                <div class="col-lg-12 col-md-12">
                    <p>Une page simple avec la possibilité de faire de sous menu j’ai montré ça aux RH et le code à mon tuteur puis il m’a dit de tout refaire mais en orienté objet. J’ai eu beaucoup de mal au début puis j’y ai pris gout et toute cette première page était en objet</p>
                </div>
                <div class="col-lg-12 col-md-12"> <img src="http://hostName/src/assets/img/stage/1ere_annee/Atom_code_accueil.png" alt="Atom_code_accueil.png" class="img-fluid"></div>
            </div>
            <div data-aos="fade-right" class="row">
                <div class="col-lg-12 col-md-12">
                    <p>Un ajout, une modification ou une suppression à la fois simple et rapide tout était fait pour que le développeur fasse simplement ce qu’il voulait. Il fallait donc ensuite continuer comme  cela et faire la suite de ce site, j’ai commencé par faire l’entrée d’une personne dans l’entreprise, mais avant de commencer j’ai demandé les attentes de mon tuteur, soit, une page qui reste la même cela sera seulement un remplacement de div que l’on fera avec Ajax (Voir dans le 2eme contexte). J’ai alors produis cela</p>
                </div>
                <div class="col-lg-12 col-md-12"> <img src="http://hostName/src/assets/img/stage/1ere_annee/entre.png" alt="entre.png" class="img-fluid"></div>
            </div>
            <div data-aos="fade-right" class="row">
                <div class="col-lg-12 col-md-12">
                    <p>Enfin ça c’était le screen final, nous ne voyons pas mais grâce à jQuery j’ai pu faire quelque animation qui était aussi là pour faire camoufler le temps de chargement de la prochaine div</p>
                </div>
                <div class="col-lg-12 col-md-12"> <img src="http://hostName/src/assets/img/stage/1ere_annee/rtt.png" alt="rtt.png" class="img-fluid"></div>
            </div>
            <div data-aos="fade-right" class="row">
                <div class="col-lg-12 col-md-12">
                    <p>Je n’ai plus le code mais cette page était elle aussi complètement en objet. On pouvait dans le code sélectionner les jours et ou les demi-journée qu’on voulait griser simplement en tapant le nom de la journée.</p>
                </div>
            </div>
        </div>

        <div data-aos="fade-right">
            <h2>Bilan</h2>
            <p>
                J'ai réalisé un site web interne à une entreprise utilisant du JavaScript, avec le Framework jQuery. Grâce à l’utilisation de ces outils, j’ai pu ajouter des animations facilitant la compréhension et l’utilisation du site. Le site n'est pas parfaitement achevé. Néanmoins, les quatre pages que j'ai mises au point sont sans bug et sont prêtes à l'utilisation. J'avais beaucoup de mal au début, j’ai dû m’adapter au Framework jQuery, inconnu pour moi avant de travailler sur ce projet. Je n’avais pas énormément d’expérience sur JavaScript non plus. Toutefois, j’ai eu la chance d’avoir un bon tuteur qui me cadrais. Ce stage était par conséquent très enrichissant pour moi.
            </p>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        name: String
    }
}
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

.explainActivity > .aos-init:first-child {
  margin-top: 18rem;
}
.explainActivity > .aos-init:not(:first-child) {
  margin-top: 30rem;
}
.explainActivity > .aos-init:last-child {
  margin-bottom: 25rem;
}

.realisation .aos-init:not(:nth-child(1)):not(:nth-child(2)) {
  margin-top: 3rem;
}

thead th {
  text-align: center;
  text-transform: capitalize;
  text-decoration: underline;
  cursor: default;
}
</style>