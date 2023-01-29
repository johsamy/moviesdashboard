import { defineStore } from 'pinia'
import axios from "axios"

export const useUserStore = defineStore("user", {
    state: () => ({
        users: [],
    }),
    getters: {
      getUsers(state){
          return state.users
        }
    },
    actions: {
      async getMovies() {
        try {
            this.movies = [];
            const data = axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=ca9cca9965b491a858c3b5736d140464&language=fr-FR&page=${this.page}`
            );
            const result = await data;
            result.data.results.forEach((movie) => {
                this.movies.push(movie);
            });
            this.total_pages = result.data.total_pages;
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async getSearchMovies() {
          this.movies = [];
          const data = axios.get(
              `https://api.themoviedb.org/3/search/movie?api_key=ca9cca9965b491a858c3b5736d140464&language=fr-FR&page=${this.page}&query=${this.searchInput}&year=${this.searchYear}`
          );
          const result = await data;
          result.data.results.forEach((movie) => {
              this.movies.push(movie);
          });
          this.total_pages = result.data.total_pages;
      },
      async getGenres() {
          this.genres = [];
          const data = axios.get(
              `https://api.themoviedb.org/3/genre/movie/list?api_key=ca9cca9965b491a858c3b5736d140464&language=fr-FR`
          );
          const result = await data;
          result.data.genres.forEach((genre) => {
              this.genres[genre.id] = genre.name;
          });
      },
    },
})
