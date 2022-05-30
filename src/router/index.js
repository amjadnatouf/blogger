import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogPage from "../views/BlogView.vue";
import PostPreview from "../views/PostPreview.vue";
import NewPost from "../views/NewPostView.vue";
import loginPage from "../views/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
  },
  {
    path: "/PostPreview/:id",
    name: "PostPreview",
    component: PostPreview,
    props: true,
  },
  {
    path: "/newpost",
    name: "NewPost",
    component: NewPost,
  },
  {
    path: "/login",
    name: "login",
    component: loginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
