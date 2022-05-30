<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <label for="exampleFormControlInput1" class="form-label"
            >Post title:</label
          >
          <input
            v-model="newtitle"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Add a new post tilte"
          />
          <p v-show="error" v-if="!newtitle" class="invalid-input">Error msg</p>
        </div>
        <div class="col-4">
          <label for="exampleFormControlInput2" class="form-label"
            >Authour:</label
          >
          <input
            v-model="newauthour"
            type="text"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="The Post is Written By..."
          />
          <p v-show="error" v-if="!newauthour" class="invalid-input">
            Error msg
          </p>
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >post description:</label
        >
        <input
          v-model="newdesc"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter a new post description"
        />
        <p v-show="error" v-if="!newdesc" class="invalid-input">Error msg</p>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >New Post content:
        </label>
        <textarea
          v-model="newcontent"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="12"
          placeholder="Write Your Post Here"
        ></textarea>
        <p v-show="error" v-if="!newcontent" class="invalid-input">Error msg</p>
        <div class="mt-3">
          <!-- <router-link class="nav-link text-white" to="/blog">
            <button
              @click="CreatePost()"
              type="button"
              class="btn btn-danger btn-rounded w-100"
            >
              Publsih
            </button>
          </router-link> -->
          <button
            @click="CreatePost()"
            type="button"
            class="btn btn-danger btn-rounded w-100"
          >
            Publsih
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "NewPost",
  data() {
    return {
      error: false,
      newtitle: "",
      newauthour: "",
      newdesc: "",
      newcontent: "",
      // apiURL: "http://localhost:3005/posts",
      apiURL: "http://192.168.1.42:3009/posts",
    };
  },
  methods: {
    async CreatePost() {
      if (this.newtitle && this.newauthour && this.newdesc && this.newcontent) {
        try {
          await axios.post(this.apiURL, {
            title: this.newtitle,
            authour: this.newauthour,
            body_descrition: this.newdesc,
            body: this.newcontent,
          });
          console.log("check if somthing is wrong");
          this.$router.push("blog");
        } catch (err) {
          console.log(err);
        }
      } else {
        this.error = true;
      }
    },
  },
};
</script>
<style scoped>
.invalid-input {
  font-size: 0.9rem;
  color: red;
}
</style>
