<template>
  <v-card
    class="mx-auto cursor-pointer"
    max-width="344"
    elevation="3"
    @click="toDetail"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">{{ author }}</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
        <v-list-item-subtitle class="mt-2">{{
          publishedAt
        }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80">
        <img :src="urlToImage" alt="logo berita" class="w-[200px] h-full" />
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    description: {
      type: String,
    },
    publishedAt: {
      type: String,
      required: true,
    },
    urlToImage: {
      type: String,
    },
  },
  methods: {
    toDetail() {
      this.$router.push({ name: "detail-page", params: { title: this.title } });
    },
  },
};
</script>
