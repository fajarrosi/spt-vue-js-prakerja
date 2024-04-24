<template>
  <div class="p-[60px]">
    <v-btn depressed color="primary" class="mb-4" @click="goBack">
      Kembali
    </v-btn>
    <v-card elevation="2" v-if="detailPost">
      <v-card-title>
        <div class="flex flex-col gap-y-4">
          <div class="text-4xl font-bold text-center">
            {{ detailPost.title }}
          </div>
          <div class="flex gap-1 flex-wrap justify-center">
            <v-chip
              color="primary"
              v-for="(tag, index) in detailPost.tags"
              :key="index"
            >
              {{ tag }}
            </v-chip>
          </div>
        </div>
      </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <div class="flex items-center text-center gap-x-4 justify-center">
          <v-avatar size="48px">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <div class="text-author font-semibold text-xl">
            {{ detailPost.author }}
          </div>
        </div>
      </v-card-text>
      <v-img
        height="250"
        :src="detailPost.urlToImage"
        alt="logo berita"
      ></v-img>
      <v-card-text>
        {{ detailPost.body }}
      </v-card-text>
    </v-card>

    <h1 class="text-4xl font-semibold my-6">Response ({{ totalComment }})</h1>

    <v-card
      elevation="2"
      v-for="(item, index) in comments"
      :key="index"
      class="mb-5"
    >
      <v-card-text>
        <div class="flex items-center text-center gap-x-4">
          <v-avatar size="48px">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <div class="text-author font-semibold text-xl">
            {{ item.user.username }}
          </div>
        </div>
      </v-card-text>
      <v-card-subtitle>{{ item.body }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "DetailView",
  computed: {
    detailPost() {
      return this.$store.getters.getPostsById(this.$route.params.id);
    },
    comments() {
      return this.$store.state.comments;
    },
    totalComment() {
      return this.$store.getters.getTotalComment;
    },
  },
  mounted() {
    this.fetchComments();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    fetchComments() {
      this.$store.dispatch("getComments", this.$route.params.id);
    },
  },
};
</script>
