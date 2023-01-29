<template>
  <div class="row">
    <div class="col-md-3">
        <CardSolo />
    </div>
    <div class="col-md-2"></div>
    <div class="col-md-5">
        <CardsList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardsList from "../components/cards/CardsList.vue";
import CardSolo from "../components/cards/CardSolo.vue";

export default defineComponent({
  name: "movies-list",
  data() {
    return {
    };
  },
  components: {
    CardsList,
    CardSolo
  }
});
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>