<template>
  <v-card
    class="mx-auto cursor-pointer"
    max-width="344"
    elevation="0"
    @click="toDetail"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ body }}</v-list-item-subtitle>
        <div class="flex gap-x-2 items-center">
          <v-avatar size="24px">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <div class="text-overline">{{ author }}</div>
        </div>
      </v-list-item-content>

      <v-list-item-avatar tile size="80">
        <img :src="urlToImage" alt="logo post" class="w-[200px] h-full" />
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    body: {
      type: String,
    },
    urlToImage: {
      type: String,
    },
  },
  methods: {
    toDetail() {
      this.$router.push({ name: "detail-page", params: { id: this.id } });
    },
  },
};
</script>
