<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-between">
      <router-link to="/" class="navbar-brand">
        <img :src="require(`@/assets/blue_short-tmdb.svg`)" alt="" style="height:25px; margin: 5px 0px 5px 35px">
      </router-link>
      <router-link to="/favoris" class="navbar-brand">
        <div style="width: 40px">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#01b4e4" class="w-1 h-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        </div>
      </router-link>
    </nav>
    <nav class="navbar navbar-expand">
      <ChipTagsBar />
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from "vue";
import ChipTagsBar from "@/components/bars/ChipTagsBar.vue";

export default defineComponent({
  name: "App",
  components: {
    ChipTagsBar
  }
});
</script>