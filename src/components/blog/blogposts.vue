<template>
  <div>
    <div class="row">
      <div class="col-8">
        <div class="posts-area">
          <CardItems
            v-for="item in posts"
            :key="item.id"
            :item="item"
            :mode="update"
            @remove="$emit('delete', item)"
          />
        </div>
      </div>
      <div class="col-4">
        <div class="side-bar">
          <SideBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import CardItems from "./blogpostsinfo.vue";
import SideBar from "./sidebar.vue";
export default {
  components: { CardItems, SideBar },
  name: "CardPost",
  props: ["posts", "update"],
  data() {
    return {
      // apiURL: "http://localhost:3005/posts/",
      // apiURL: "http://192.168.1.42:3009/posts/",
      apiURL: "https://jsonplaceholder.typicode.com/posts/",

      mode: "",
    };
  },
};
</script>

<style></style>
