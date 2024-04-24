<template>
  <div class="bg-gray-300">
    <h1 class="text-4xl text-center p-4 font-semibold text-sky-500">
      Recent Post
    </h1>
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
      return this.$store.state.posts;
    },
  },
};
</script>
