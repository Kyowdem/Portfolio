<template>
  <div>
    <div class="container-fluid">
      <div class="row justify-content-center textCenter">
        <div class="col-md-12">
          <h1>A propos de moi</h1>
        </div>
      </div>

      <div class="row justify-content-lg-around">
        <div class="col-md-3 col-lg-2">
          <img
            class="img-fluid"
            :src="this.$parent.assetsPath+'img/photo-CV.jpeg'"
            alt="Photo de moi-même"
          />
        </div>
        <div class="col-md-7 col-lg-7 description">
          <p>
            Je m'appelle Mehdi Collomb, j'ai 21 ans et je suis un développeur en apprentissage. J'ai commencé mes études de développeur en France dans un
            <router-link to="/etude/BTS">BTS</router-link>, pendant 2 années où j'ai pu aussi faire des stages en entreprise. Je suis venue m'installer au Québec pour pouvoir finir mes études de développeur. Je fais actuellement un baccalauréat Génie logiciel dans l'université de l'
            <router-link to="/etude/UQAM">UQAM</router-link>.
            <br />Pour voir mes expériences en développement
            <b @click="openNavbarSchool()">cliquez ici</b>
            et choisissez le parcours
          </p>
        </div>
        <div
          class="col-md-2 col-lg-1 textCenter CV"
          @mouseenter="showCV = false"
          @mouseleave="showCV = true"
        >
          <transition name="fade" mode="out-in">
            <p v-if="showCV">Voir mon CV</p>
            <a v-else :href="$parent.assetsPath+'PDF/CV.pdf'" target="_blank">
              <img
                :src="$parent.assetsPath+'img/icones/document_PDF.png'"
                alt="document_PDF.png"
                class="img-fluid"
              />
            </a>
          </transition>
        </div>
      </div>

      <div class="row myProjects">
        <div class="col-md-12">
          <p>Voici {{projects.length}} de mes projets dont je suis le plus fier de vous montrer :</p>
        </div>
        <div class="col-md-7 col-lg-6">
          <div class="list-group">
            <router-link
              v-for="project in projects"
              :key="project.name"
              :to="project.href"
              class="list-group-item list-group-item-action list-group-item-transparent"
            >{{project.name}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCV: true,
      projects: [
        { name: "PPE : GSB", href: "etude/BTS/PPE/Mission n°2 : GSB" },
        { name: "Stage : nodeJs et Tesseract", href: "etude/BTS/stage/Lire une facture avec nodeJs et Tesseract" }
      ]
    };
  },
  methods: {
    openNavbarSchool() {
      if ($(window).width() < 992) {
        $.when($("button.navbar-toggler").click()).then(function() {
          $("a.nav-link.dropdown-toggle").click();
        });
      } else {
        $.when().then(function() {
          $("a.nav-link.dropdown-toggle").click();
        });
      }
    }
  }
};
</script>

<style>
img[alt="document_PDF.png"],
div.CV>p,
div.description b {
  cursor: pointer;
}

div.description > p {
  text-align: justify;
}

div.description b:hover {
  text-decoration: underline;
}

.row.myProjects {
  margin-top: 2em;
}
</style>