import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  /* eslint-disable */
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: "/",
    alias: "/dashboard",
    name: "dashboard",
    component: () => import("@/components/Dashboard.vue"),
  },
  {
    path: "/movies",
    alias: "/movies",
    name: "movies",
    component: () => import("@/components/MoviesList.vue"),
  },
  {
    path: "/movies/:id",
    name: "movie-details",
    component: () => import("@/components/MovieDetails.vue"),
  },
  {
    path: '/genres/:genreid',
    name: 'genres',
    component: () => import("@/components/MoviesByGenreList.vue"),
    props: true
  },
  {
    path: "/favoris",
    name: "favoris",
    component: () => import("@/components/FavoriteMovies.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
