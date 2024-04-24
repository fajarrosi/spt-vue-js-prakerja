<template>
  <div>
    <h1 class="text-4xl text-center p-4 font-semibold text-sky-500">
      Berita Terkini
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

    <div class="flex flex-wrap px-3 py-4 gap-y-4" v-if="news.length > 0">
      <item-news v-for="(item, index) in news" :key="index" v-bind="item" />
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
  data: () => ({
    attrs: {
      class: "mb-6",
      boilerplate: true,
      elevation: 2,
    },
    search: "",
    searchLoading: false,
    selection: "",
    sizes: [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ],
  }),
  watch: {
    search(val) {
      this.searchLoading = true;
      setTimeout(() => {
        this.$store.dispatch("searchNews", val);
        this.searchLoading = false;
      }, 1000);
    },
    selection(val) {
      this.search = "";
      this.$store.dispatch("searchNewsByCategory", val);
    },
  },
};
</script>
