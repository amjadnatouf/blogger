<template>
  <div class="blog-view">
    <div class="blog-posts">
      <div class="container">
        <div class="fs-1 d-flex justify-content-between">
          <h2 class="rubrik py-3 fs-1 fw-bolder">Blogs Article</h2>
          <div
            @click="showUpdate()"
            class="form-check form-switch"
            :update="update"
          >
            <label for="flexSwitchCheckDefault"></label>
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <Card :posts="posts" :update="update" @delete="removepost" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/blog/blogposts.vue";
import axios from "axios";
export default {
  name: "BlogPage",
  components: {
    Card,
  },
  data() {
    return {
      update: false,
      //   posts: [
      //     { id: "1", title: "title1", body: "body1", imgurl: "../assets/1.jpg" },
      //     { id: "2", title: "title2", body: "body2", imgurl: "../assets/2.jpg" },
      //     { id: "3", title: "title3", body: "body3", imgurl: "../assets/3.jpg" },
      //     { id: "4", title: "title4", body: "body4", imgurl: "../assets/4.jpg" },
      //     { id: "5", title: "title5", body: "body5", imgurl: "../assets/5.jpg" },
      //   ],
      posts: [],
      // apiURL: "https://jsonplaceholder.typicode.com/posts/?_limit=10",
      // apiURL: "http://localhost:3005/posts/",
      apiURL: "http://192.168.1.42:3009/posts/",
    };
  },
  methods: {
    async fetchPosts() {
      const res = await axios.get(this.apiURL);
      console.log(res.data);
      this.posts = res.data;
    },
    showUpdate() {
      console.log(this.update);
      this.update = !this.update;
      console.log(this.update);
      return;
    },

    async removepost(item) {
      try {
        console.log(item);
        await axios.delete(this.apiURL + item.id);
        this.posts = this.posts.filter((post) => post.id !== item.id);
      } catch (err) {
        console.log(err);
      }
    },
  },

  created() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
.blog-view {
  background-image: url("../assets/blog-cover.jpg");
  background-size: cover;
}
.blog-posts {
  background-color: rgba(0, 0, 0, 0.4);
}
input {
  margin-top: 1rem;
}
.rubrik {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: rgba(124, 36, 36, 0.764);
}
</style>
