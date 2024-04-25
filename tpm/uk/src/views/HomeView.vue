<template>
  <div class="bg-gray-300">
    <h1 class="text-4xl py-4 px-[32px] font-semibold text-black text-center">
      Recent Post
    </h1>
    <div class="px-4">
      <v-text-field
        label="Search"
        placeholder="Search News"
        solo
        v-model="search"
        clearable
        :loading="searchLoading"
      ></v-text-field>
    </div>

    <h2 class="text-h6 mb-2 text-center">Choose Category</h2>
    <div class="flex justify-center">
      <v-chip-group
        v-model="selection"
        active-class="deep-purple--text text--accent-4"
      >
        <v-chip v-for="size in sizes" :key="size" :value="size">
          {{ size }}
        </v-chip>
      </v-chip-group>
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
      if (this.search) {
        return this.$store.state.posts.filter(
          (el) => el.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      } else if (this.selection) {
        return this.$store.state.posts.filter((el) =>
          el.tags.some((tag) => tag == this.selection)
        );
      } else {
        return this.$store.state.posts;
      }
    },
  },
  data: () => ({
    search: "",
    searchLoading: false,
    selection: "",
    sizes: [
      "history",
      "american",
      "french",
      "mystery",
      "magical",
      "english",
      "love",
    ],
  }),
  watch: {
    search() {
      this.searchLoading = true;
      setTimeout(() => {
        this.searchLoading = false;
      }, 1000);
    },
    selection(val) {
      console.log("val", val);
      console.log(
        "val",
        this.$store.state.posts.filter((el) =>
          el.tags.some((tag) => tag == this.search)
        )
      );
    },
  },
};
</script>
