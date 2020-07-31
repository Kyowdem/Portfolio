<template>
  <div>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">{{title}}</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown" v-for="columnList in columnsList" :key="columnList.name">
            <router-link
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{ columnList.name }}</router-link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link
                v-for="column in columnList.list"
                :key="column.name"
                class="dropdown-item"
                :to="column.href"
              >{{ column.name }}</router-link>
            </div>
          </li>
          <li class="nav-item" v-for="column in columns" :key="column.name">
            <router-link class="nav-link" :to="column.href">{{column.name}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Portfolio",
      columns: [
        { href: "/contact", name: "Contact" },
        { href: "/aboutMe", name: "A propos" },
      ], // An object inside an array with params: href and name
      columnsList: [
        {
          name: "Etude",
          list: [
            { href: "/etude/BTS", name: "BTS" },
            { href: "/etude/UQAM", name: "UQAM" },
          ],
        },
      ], // An object insite an array with params: name and list. Insite list set columns
    };
  },
};
</script>

<style>
</style>