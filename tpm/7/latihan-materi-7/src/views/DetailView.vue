<template>
  <div class="p-[60px]">
    <v-card elevation="2">
      <v-card-title>
        <div class="text-4xl font-bold text-center">
          {{ detailNews.title }}
        </div>
      </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <div class="flex items-center text-center gap-x-4 justify-center">
          <div class="text-author font-semibold text-xl">
            {{ detailNews.author }}
          </div>
          <div class="text-author font-semibold text-xl">
            {{ detailNews.publishedAt }}
          </div>
        </div>
      </v-card-text>
      <v-img
        height="250"
        :src="detailNews.urlToImage"
        alt="logo berita"
      ></v-img>
      <v-card-text>
        {{ detailNews.content }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="goBack">
          Kembali
        </v-btn>
        <v-btn
          depressed
          color="primary"
          type="a"
          target="_blank"
          :href="detailNews.url"
        >
          Read More
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "DetailView",
  computed: {
    detailNews() {
      return this.$store.getters.getNewsByTitle(this.$route.params.title);
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
