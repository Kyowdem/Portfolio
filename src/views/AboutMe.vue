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
            src="@/assets/img/cv/Photo-CV.jpeg"
            alt="Photo de moi-même"
          />
        </div>
        <div class="col-md-7 col-lg-7 description">
          <p>
            Je m'appelle Mehdi Collomb, j'ai 21 ans et je suis un développeur en
            apprentissage. J'ai commencé mes études de développeur en France
            dans un
            <a
              href="https://www.martiniere-duchere.fr/formations/superieur/bts-sio/"
              target="_blank"
              >BTS SIO option SLAM</a
            >, pendant 2 années où j'ai pu aussi faire des stages en entreprise.
            Je suis venue m'installer au Québec pour pouvoir finir mes études de
            développeur. Je fais actuellement un baccalauréat Génie logiciel
            dans l'université de l'
            <a
              href="https://etudier.uqam.ca/programme?code=7316"
              target="_blank"
              >UQAM en génie logiciel</a
            >. <br />Pour voir mes expériences en développement
            <b @click="openNavbarSchool()">cliquez ici</b>
            et choisissez le parcours
          </p>
        </div>
        <div class="col-md-2 col-lg-1 textCenter CV">
          <a :href="require('@/assets/img/cv/CV.jpg')">Voir mon CV</a>
        </div>
      </div>
    </div>

    <div class="container-fluid spacingTop">
      <div class="row">
        <div class="col-md-3">
          <h4>Competences</h4>
        </div>
      </div>
      <div class="row justify-content-center">
        <Skill
          v-for="skill in skills.slice(0, this.sliceArray)"
          :key="skill.name"
          :name="skill.name"
          :level="skill.level"
        />
        <div class="showMore" @click="showMore">
          <a v-if="!showMoreTxt">Afficher plus</a>
          <a v-else>Afficher moins</a>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row justify-content-center myProjects spacingTop">
        <div class="col-md-12">
          <p>
            Voici {{ projects.length }} de mes projets dont je suis le plus fier
            de vous montrer :
          </p>
        </div>
        <div class="col-md-7 col-lg-6">
          <div class="list-group">
            <router-link
              v-for="project in projects"
              :key="project.name"
              :to="project.href"
              class="list-group-item list-group-item-action list-group-item-transparent"
              >{{ project.name }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <br />
    <!-- resolve reload problem, when skills loading -->
  </div>
</template>

<script>
import $ from "jquery";
import Skill from "@/components/Skill.vue";
import skills from "@/assets/json/skills.json";
import portfolioProjects from "@/assets/json/projects.json";

export default {
  components: {
    Skill,
  },
  data() {
    return {
      projects: [
        {
          name: portfolioProjects[6].name,
          href: `/portfolio/${portfolioProjects[6].name}`,
        },
        {
          name: portfolioProjects[3].name,
          href: `/portfolio/${portfolioProjects[3].name}`,
        },
      ],
      skills,
      sliceArray: 9,
      showMoreTxt: 0,
    };
  },
  methods: {
    openNavbarSchool() {
      if ($(window).width() < 992) {
        $.when($("button.navbar-toggler").click()).then(function () {
          $("a.nav-link.dropdown-toggle").click();
        });
      } else {
        $.when().then(function () {
          $("a.nav-link.dropdown-toggle").click();
        });
      }
    },
    shuffle(array) {
      array.sort(() => Math.random() - 0.5);
      return array;
    },
    showMore() {
      this.sliceArray = 0;
      if (!this.showMoreTxt)
        setTimeout(() => {
          this.sliceArray = this.skills.length;
        }, 0);
      else
        setTimeout(() => {
          this.sliceArray = 9;
        }, 0);

      this.showMoreTxt = !this.showMoreTxt;
    },
  },
  mounted() {
    this.shuffle(this.skills);
  },
};
</script>

<style>
img[alt="document_PDF.png"],
div.CV > p,
div.description b {
  cursor: pointer;
}

div.description > p {
  text-align: justify;
}

div.description b:hover {
  text-decoration: underline;
}

.showMore {
  margin-top: 0.5em;
  cursor: pointer;
}

/* Bootstrap new item */
.list-group-item-transparent {
  color: #fff !important;
  background-color: #00000020 !important;
}

.list-group-item-transparent.list-group-item-action:hover,
.list-group-item-transparent.list-group-item-action:focus {
  color: #1b1e21 !important;
  background-color: #ffffff90 !important;
}

.list-group-item-transparent.list-group-item-action.active {
  color: #fff;
  background-color: #1b1e21 !important;
  border-color: #1b1e21 !important;
}

.description a:hover {
  font-weight: normal;
}

div.CV {
  height: 125px;
  border: 5px solid gold;
  border-radius: 25px;
  padding: 45px 0;
}
</style>