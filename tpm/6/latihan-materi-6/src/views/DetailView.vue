<template>
  <div class="p-6">
    <img
      :src="detailNews.urlToImage"
      alt="logo-news"
      class="w-full h-[500px] mb-4"
    />
    <div class="text-4xl font-bold text-center mb-3">
      {{ detailNews.title }}
    </div>
    <div class="flex items-center text-center gap-x-4 justify-center mb-6">
      <div class="text-author font-semibold text-xl">
        {{ detailNews.author }}
      </div>
      <div class="text-author font-semibold text-xl">
        {{ detailNews.publishedAt }}
      </div>
    </div>

    <div class="link-news mb-6">
      <a
        :href="detailNews.url"
        target="_blank"
        rel="noopener noreferrer"
        class="underline text-sky-700"
        >Klik here to read more about this news</a
      >
    </div>

    <button
      class="p-2 bg-red-500 hover:bg-red-700 rounded-lg text-white"
      @click="goBack"
    >
      Kembali
    </button>
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
