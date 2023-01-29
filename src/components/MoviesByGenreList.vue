<template>
  <div class="d-flex justify-space-around flex-wrap">
    <div
      v-for="(movie, index) in movies"
      :key="index"
      @click="setActiveMovie(movie, index)"
      class="movieCard d-flex flex-column"
    >
        <img v-if="movie.poster_path"
        height="350"
        width="240"
        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"/>
        <img v-else
        class="ml-8 rounded"
        max-height="350"
        src="../assets/video.svg"/>

        <strong
        class="text-center my-2"
        heigth="400"
        style="font-size: 1.2em;">
            {{ movie.title.slice(0,22) }}
            <span v-if="movie.title.length > 22">...</span>
        </strong>

        <div class="ms-3 text-subtitle-1">
            Sortie :
            {{
                new Date(movie.release_date).toLocaleString('fr-FR', {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                })
            }}
        </div>
        <div class="d-flex justify-content-center">
          <div class="my-3" style="width: 40px; top:-70%" @click="addFav()">
            <svg xmlns="http://www.w3.org/2000/svg" :fill="isFav" viewBox="0 0 24 24" stroke-width="1.5" stroke="#01b4e4" class="w-1 h-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from 'vue-router';
import MovieDataService from "../services/MovieDataService";
import Movie from "../types/Movie";
import ResponseData from "../types/ResponseData";

export default defineComponent({
  name: "movies-list",
  data() {
    return {
      movies: [] as Movie[],
      currentMovie: {} as Movie,
      currentIndex: -1,
      title: "",
      genreId: "",
      isFav: "none"
    };
  },
  methods: {
    retrieveMovies() {
      MovieDataService.getMoviesByGenres(this.genreId)
        .then((response: ResponseData) => {
          this.movies = response.data.results;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    setActiveMovie(movie: Movie, index = -1) {
      this.currentMovie = movie;
      this.currentIndex = index;
    },
    addFav() {
      this.isFav = "#01b4e4";
    }
  },
  mounted() {
    this.retrieveMovies();
    const route = useRoute();  
    this.genreId = route.params.id;
  }
});
</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.movieCard {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  margin: 10px 10px 30px 9px;
}
</style>