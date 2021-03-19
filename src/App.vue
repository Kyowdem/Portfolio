<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* change scroll bar */
body::-webkit-scrollbar {
  width: 12px;
  background-color: #000;
}

body::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: transparent;
}

body::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #ffd400;
  border: 2px solid rgb(124, 124, 124);
}

div.container div.row:not(:last-child) {
  margin-bottom: 3em;
}
</style>
