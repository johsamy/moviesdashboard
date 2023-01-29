<template>
    <div class="scrollbar" style="overflow-y: auto; overflow-x: scroll; position: relative;">
      <ul class="list-group d-flex flex-row force-overflow">
        <li
          class="tagButton"
          v-for="(genre, index) in genres"
          :key="index"
        >
          <router-link :to="`/genres/${genre.id}`">
          <div v-if="genre.id == 878">
            SF
          </div>
          <div v-else>
            {{ genre.name }}
          </div>
          </router-link>
        </li>
        <li
          class="tagButton"
        >
          <router-link to="/movies">
            Tous
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieDataService from "../../services/MovieDataService";
import Genre from "../../types/Genre";
import ResponseData from "../../types/ResponseData";

export default defineComponent({
  name: "chip-tags-bar",
  data() {
    return {
      genres: [] as Genre[],
      name: "",
    };
  },
  methods: {
    retrieveGenres() {
      MovieDataService.getGenres()
        .then((response: ResponseData) => {
          this.genres = response.data.genres;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveGenres();
  },
});
</script>

<style scoped>
a {
  color: #0d253f;
  text-decoration: none;
}
.tagButton {
  border: 1px solid #0d253f;
  border-radius: 5px;
  background-color: #fdfdfd;
  padding: 5px 10px;
  margin: 15px 10px;
  list-style-type: none;
}
.scrollbar
{
	margin: 0px 15px 10px 15px;
	overflow-x: scroll;
}

.scrollbar::-webkit-scrollbar-track
{
	border-radius: 10px;
	background-color: #01b3e420;
}

.scrollbar::-webkit-scrollbar
{
  height: 3px;
}

.scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color: #01b4e4;
}

</style>