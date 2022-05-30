<template>
  <div>
    <AppHeader />
    <div class="app-body">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "./components/global/appheader.vue";
import AppFooter from "./components/global/appfooter.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
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
.app-body {
  min-height: 1000px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
