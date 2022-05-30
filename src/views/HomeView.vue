<template>
  <div class="home">
    <HelloWorld msg="Grand Blog" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
.home {
  min-height: 1500px;
  background-image: url("../assets/cover.jpg");
  background-size: cover;
}
</style>
