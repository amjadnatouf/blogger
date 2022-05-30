<template>
  <div class="header">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="">
            <img class="home-img" src="@/assets/logo.png" alt="Brand"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link
                  class="nav-link text-white"
                  :to="{ name: 'home' }"
                  exact
                  >HOME</router-link
                >
              </li>
              <li>
                <router-link class="nav-link text-white" to="/blog"
                  >BLOG</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-white" to="/newpost"
                  >NEW POST</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-white" to="/login"
                  >LOGIN/REGISTER</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "appHeader",
};
</script>

<style scoped>
.home-img {
  width: 2.5rem;
}
ul li {
  font-family: "Lato", sans-serif;
}
</style>
