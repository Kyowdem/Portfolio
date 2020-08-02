<template>
  <div>
    <navbar></navbar>
    <div class="container-fluid school" v-if="activityOrSchool">
      <div class="row justify-content-md-center textCenter">
        <div class="col-md-12">
          <h1>{{schoolType}}</h1>
        </div>
      </div>

      <div class="row justify-content-md-center">
        <div class="col-md-6 col-lg-4">
          <img
            :src="$parent.assetsPath+'img/'+this.etude.imgName"
            class="img-fluid"
            :alt="this.etude.imgName"
          />
        </div>
        <div class="col-md-6 offset-lg-2 col-lg-4">
          <p>{{etude.DescBackSchool}}</p>
        </div>
      </div>

      <div class="row justify-content-md-around">
        <div class="col-md-5" v-for="(activity, property) in activitiesSchool" :key="property">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>{{property}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="activity in activities[property].name" :key="activity">
                <th class="activity textClick" @click="goTo(property, activity)">{{activity}}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="container-fluid activity" v-else>
      <div class="row justify-content-md-center textCenter">
        <div class="col-md-12">
          <h1>{{actualActivities.name}}</h1>
        </div>
      </div>

      <div v-for="(item, props) in activities" :key="props">
        <div
          class="row justify-content-md-center"
          v-for="(item, index) in activities[props].name"
          :key="activities[props].name[index]"
        >
          <div
            class="col-md-12 col-lg-8 explainActivity"
            v-if="switchCase(activities[props].name[index])"
          >
            <div data-aos="fade-right" v-if="props == 'stage'">
              <h2>Présentation de l'entreprise</h2>
              <p v-html="`${activities[props].description[index]['presentation de l\'entreprise']}`"></p>
            </div>

            <div data-aos="fade-right">
              <h2>Contexte</h2>
              <p v-html="`${activities[props].description[index]['contexte']}`"></p>
            </div>

            <div data-aos="fade-right">
              <h2>Besoin</h2>
              <p v-html="`${activities[props].description[index]['besoin']}`"></p>
            </div>

            <div data-aos="fade-right">
              <h2>Environnement technologique</h2>
              <p v-html="`${activities[props].description[index]['environnement technologique']}`"></p>
            </div>

            <div data-aos="fade-right">
              <h2>Réalisation</h2>
              <p v-html="`${activities[props].description[index]['realisation'].join('<br />')}`"></p>
            </div>

            <div data-aos="fade-right">
              <h2>Bilan</h2>
              <p v-html="`${activities[props].description[index]['bilan']}`"></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import etude from "./assets/JSON/etude.json";
import activitiesSchool from "./assets/JSON/stage&PPE.json";

export default {
  data() {
    return {
      schoolType: this.$route.params.etudeName,
      etude: etude[this.$route.params.etudeName], // Can't do this.title cause title isn't defined when etude is create
      activities: {
        stage: { name: [], description: [] },
        PPE: { name: [], description: [] }
      },
      activitiesSchool,
      activityOrSchool: true, // Depend of url (if it activities or description of school)
      actualActivities: { name: "", description: "" }
    };
  },
  created() {
    // set Host url to href img
    this.activitiesSchool = (JSON.parse(JSON.stringify(this.activitiesSchool).replace(/hostName/g, this.$parent.getHostName())));
    this.setActivities();
  },
  mounted() {
    this.setActivityOrSchool();
  },
  watch: {
    "$route.params.activity": function() {
      this.setActivityOrSchool();
    }
  },
  methods: {
    setActivities() {
      this.activitiesSchool = this.activitiesSchool[this.schoolType];
      for (let property in this.activitiesSchool) {
        const element = this.activitiesSchool[property];
        element.forEach(activity => {
          if (activity.contexts) {
            activity.contexts.forEach(activityContext => {
              this.activities[property].name.push(activityContext.name);
              this.activities[property].description.push(
                activityContext.description
              );
            });
          }
        });
      }
    },
    setActivityOrSchool() {
      if (this.$route.params.typeOfActivity && this.$route.params.activity) {
        this.activityOrSchool = false;
        this.actualActivities.name = this.$route.params.activity;
        this.searchDescription();
      } else {
        this.activityOrSchool = true;
      }
    },
    goTo(property, activity) {
      this.$router.push(`/etude/${this.schoolType}/${property}/${activity}`);
    },
    searchDescription() {
      let activities = this.activities[this.$route.params.typeOfActivity];
      for (let i = 0; i < activities.name.length; i++) {
        if (activities.name[i] == this.actualActivities.name) {
          this.actualActivities.description = activities.description[i];
        }
      }
    },
    switchCase(params) {
      if (this.actualActivities.name == params) return true;
    }
  }
};
AOS.init();
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