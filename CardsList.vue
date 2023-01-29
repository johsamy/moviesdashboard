<template>
  <div class="row" style="margin-top: 35px">
    <ul>
      <li
        class="rounded shortMovieCard"
        v-for="(movie, index) in movies"
        :key="index"
        @click="setActiveMovie(movie, index)"
      >
        <div class="d-flex align-items-center">
          <img v-if="movie.poster_path"
          height="125"
          class="rounded"
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"/>
          <div style="margin-left: 15px">
            <h5 class="card-title">
              {{ movie.title }}
            </h5>
            <p class="card-text">
              Date de sortie :
              {{
                  new Date(movie.release_date).toLocaleString('fr-FR', {
                      month: "long",
                      day: "numeric",
                      year: "numeric"
                  })
              }}
            </p>
          </div>
        </div>
        <div>
          <div style="width: 40px; top:-70%; margin: 40px 30px" @click="addFav()">
            <svg xmlns="http://www.w3.org/2000/svg" :fill="isFav" viewBox="0 0 24 24" stroke-width="1.5" stroke="#01b4e4" class="w-1 h-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieDataService from "../../services/MovieDataService";
import Movie from "../../types/Movie";
import ResponseData from "../../types/ResponseData";

export default defineComponent({
  name: "cards-list",
  data() {
    return {
      movies: [] as Movie[],
      title: "",
      isFav: "none"
    };
  },
  methods: {
    retrieveMovies() {
      MovieDataService.getAll()
        .then((response: ResponseData) => {
          this.movies = response.data.results.slice(0,4);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    addFav() {
      this.isFav = "#01b4e4";
    }
  },
  mounted() {
    this.retrieveMovies();
  },
});
</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

.shortMovieCard {
    position: relative;
    display: flex;
    min-width: 140%;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid #D7D7D8;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    margin: 15px 0 30px 0;
    justify-content: space-between;
}

.card-text {
  font-size: 0.9em;
}
</style>