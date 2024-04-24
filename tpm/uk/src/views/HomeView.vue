<template>
  <div class="bg-gray-300">
    <h1 class="text-4xl py-4 px-[32px] font-semibold text-black text-center">
      Recent Post
    </h1>
    <div class="px-[500px] pt-4">
      <v-text-field
        label="Search"
        placeholder="Search News"
        solo
        v-model="search"
        clearable
        :loading="searchLoading"
      ></v-text-field>
    </div>

    <div class="flex flex-wrap px-3 py-4 gap-y-4" v-if="posts.length > 0">
      <item-post v-for="(item, index) in posts" :key="index" v-bind="item" />
    </div>
    <div v-else>
      <v-container>
        <v-row>
          <v-col cols="12" md="4" lg="3" v-for="n in 50" :key="n">
            <v-skeleton-loader
              v-bind="attrs"
              type="article, actions"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import ItemPost from "../components/ItemPost";
export default {
  name: "HomeView",
  components: {
    ItemPost,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.dispatch("savePosts");
    },
  },
  computed: {
    posts() {
      return this.search != ""
        ? this.$store.state.posts.filter(
            (el) =>
              el.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          )
        : this.$store.state.posts;
    },
  },
  data: () => ({
    search: "",
    searchLoading: false,
  }),
  watch: {
    search() {
      this.searchLoading = true;
      setTimeout(() => {
        this.searchLoading = false;
      }, 1000);
    },
  },
};
</script>
