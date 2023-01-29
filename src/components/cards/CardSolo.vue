<template>
    <div class="container">
      <div class="backgroundImg rounded"
        height="650"
        :style="{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) 89.71%), url('https://image.tmdb.org/t/p/w500/${movie.poster_path}')`
        }"
      ></div>
      <div class="top-right">
        <div style="width: 40px; top:-70%" @click="addFav()">
          <svg xmlns="http://www.w3.org/2000/svg" :fill="isFav" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0d253f" class="w-1 h-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        </div>
      </div>
      <div class="centered">
        <h3>
            {{ movie.title }}
        </h3>
      </div>
      <div class="bottom-left">
        <div align="left" class="ms-4 my-2">
            Date de sortie :
            {{
                new Date(movie.release_date).toLocaleString('fr-FR', {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                })
            }}
        </div>
        <div align="left" class="grey--text ms-4 my-2">
            Durée : 
            {{ movie.runtime }} minutes
        </div>
        <div align="left" class="grey--text ms-4 my-2" style="inline-size: 400px; overflow-wrap: break-word;">
            Synopsis : 
            {{ movie.overview }}
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieDataService from "../../services/MovieDataService";
import Movie from "../../types/Movie";
import ResponseData from "../../types/ResponseData";

export default defineComponent({
  name: "cards-list",
  head() {
    return {
        title: this.movie.title,
    }
  },
  data() {
    return {
        movie: [],
        data: [],
        isFav: "#01b4e4"
    };
  },
  methods: {
    retrieveMovie() {
      MovieDataService.getMovie(585511)
        .then((response: ResponseData) => {
            this.movie = response.data;
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
    this.retrieveMovie();
  },
});
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
  color: white;
  margin-top: 30px;
}
.backgroundImg {
  background-size: cover;
  height: 650px;
  width: 425px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}
.top-right {
  position: absolute;
  top: 8px;
  right: -40%;
}
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 1px;
}
.centered {
  position: absolute;
  top: 54%;
  left: 18%;
  transform: translate(-50%, -50%);
}
</style>
