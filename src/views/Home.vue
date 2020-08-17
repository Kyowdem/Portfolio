<template>
  <div>
    <div class="container mainPage">
      <div class="row justify-content-center autor">
        <div class="col-md-6">
          <h1>Portfolio de</h1>
        </div>
        <div class="col-md-12 col-lg-10 name">
          <h1>Collomb Mehdi</h1>
        </div>
        <div class="description">
          <p>Developpeur Front-end, Back-end, application mobile et Windows.</p>
        </div>
      </div>
      <div class="row justify-content-center aboutMe">
        <div
          class="col-md-2 col-lg-1 borderRectangle"
          @mouseenter="showAboutMe = true"
          @mouseleave="showAboutMe = false"
          @click="$router.push('/aboutMe')"
          title="Cliquez pour en savoir plus"
        >
          <transition name="fade" mode="out-in">
            <p key="1" class="normalText" v-if="showAboutMe">Plus a propos de moi</p>
            <p key="2" class="bigText" v-else>?</p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAboutMe: false
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style>
.autor h1 {
  text-align: center;
}
.autor .name h1 {
  color: transparent;
  text-transform: uppercase;
  font-size: 7.5em;
  background-image: linear-gradient(to right, #fff, #ff0, #000);
  background-clip: text; /* Permet de mettre le background sur le text */
  animation: animate 5s linear infinite;
  background-size: 500%;
}
@keyframes animate {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

div.mainPage {
  margin-top: 10em;
}

.borderRectangle {
  height: 6em;
  margin: auto;
  border: #80808070 solid 0.5em;
  cursor: pointer;
}

p.bigText {
  font-size: 340%;
}

@media (min-width: 992px) {
  p.normalText {
   font-size: 94%;
  }
}

div.borderRectangle p {
  margin: auto;
  text-align: center;
  font-weight: bold;
  user-select: none;
}

</style>
