<template>
  <div class="post-preview">
    <div class="container">
      <div>
        <blogpost :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Blogpost from "@/components/blog/blogpost.vue";
export default {
  components: { Blogpost },
  name: "PostPreview",
  data() {
    return {
      post: {},
      // PostUrl: "http://localhost:3005/posts/" + this.$route.params.id,
      PostUrl: "http://192.168.1.42:3009/posts/" + this.$route.params.id,
    };
  },
  props: ["params"],
  methods: {
    async fetchPost() {
      const res = await axios.get(this.PostUrl);
      console.log(res.data);
      this.post = res.data;
    },
  },
  created() {
    this.fetchPost();
  },
};
</script>

<style></style>
