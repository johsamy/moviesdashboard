<template>
  <div v-if="currentMovie.id" class="edit-form">
    <h4>Movie</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentMovie.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentMovie.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentMovie.published ? "Published" : "Pending" }}
      </div>
    </form>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Movie...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieDataService from "@/services/MovieDataService";
import Movie from "@/types/Movie";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "movie",
  data() {
    return {
      currentMovie: {} as Movie,
      message: "",
    };
  },
  methods: {
    getMovie(id: any) {
      MovieDataService.getMovie(id)
        .then((response: ResponseData) => {
          this.currentMovie = response.data;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = "";
    this.getMovie(this.$route.params.id);
  },
});
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>