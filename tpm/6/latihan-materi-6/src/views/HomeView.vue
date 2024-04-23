<template>
  <div>
    <h1 class="text-4xl text-center p-4 font-semibold text-sky-500">
      Berita Terkini
    </h1>

    <div class="container-news px-3 py-4" v-if="news.length > 0">
      <item-news v-for="(item, index) in news" :key="index" v-bind="item" />
    </div>
  </div>
</template>

<script>
import ItemNews from "@/components/ItemNews.vue";
export default {
  name: "HomeView",
  components: {
    ItemNews,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.dispatch("saveNews");
    },
  },
  computed: {
    news() {
      return this.$store.state.news;
    },
  },
};
</script>

<style>
@import url("../assets/home.css");
</style>
