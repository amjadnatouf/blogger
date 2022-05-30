<template>
  <div class="post-info">
    <div class="container">
      <div class="card mt-4">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
          class="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">
            {{ post.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: ["post"],
};
</script>

<style></style>
