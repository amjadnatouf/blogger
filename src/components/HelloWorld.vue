<template>
  <div class="overlay">
    <div class="p-5 hello text-start">
      <div class="container">
        <h1 class="py-5 m-0">
          {{ msg }}
          <br />
          <br />
          <span>Blog Landing Page 2019</span>
        </h1>
        <p class="blog-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters,
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overlay {
  min-height: 1500px;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  /* z-index: 1; */
}
h1 {
  font-family: cursive;
  line-height: 80px;
  font-weight: bolder;
  font-size: 80px;
  color: #02fee5;
}
h1 br {
  content: "";
  margin: 2em;
  display: block;
  font-size: 24%;
}
.blog-text {
  color: #fff;
  font-size: 30px;
  font-family: "Sen", sans-serif;
  font-family: "Work Sans", sans-serif;
}
</style>
