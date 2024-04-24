<template>
  <div class="content p-2" @click="toDetail">
    <div
      class="card-news shadow-md text-black p-3 rounded-md flex gap-x-2 h-full cursor-pointer"
    >
      <img :src="urlToImage" alt="logo berita" class="w-[200px] h-full" />
      <div class="text-news flex flex-col gap-y-4">
        <div class="author font-semibold text-xl">{{ author }}</div>
        <div class="title font-semibold text-xl text-blue-700">
          {{ title }}
        </div>
        <div class="published-at">{{ publishedAt }}</div>
      </div>
    </div>
  </div>
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
