<template>
  <div class="p-4">
    <button
      class="p-2 bg-red-500 hover:bg-red-700 rounded-lg text-white"
      @click="goBack"
    >
      Kembali
    </button>
    <h1 class="pt-4 font-semibold text-4xl">{{ getTodo.todo }}</h1>

    <div class="flex gap-x-2 pt-4" v-if="showEditDeskripsi">
      <input
        type="text"
        class="grow border border-black p-2"
        v-model="editing"
      />
      <button
        class="p-2 bg-sky-500 hover:bg-sky-700 rounded-lg text-white"
        @click="onSimpan"
      >
        Simpan
      </button>
    </div>
    <div v-else>
      <h1 class="pt-4 font-semibold text-xl" v-if="getTodo.deskripsi">
        {{ getTodo.deskripsi }}
      </h1>
      <h1 class="pt-4 font-semibold text-xl" v-else>Belum ada deskripsi nih</h1>
      <button
        class="p-2 bg-sky-500 hover:bg-sky-700 rounded-lg text-white mt-4"
        @click="onUbahDeskripsi"
      >
        Ubah Deskripsi
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail-Todo",
  data() {
    return {
      editing: "",
    };
  },
  computed: {
    getTodo() {
      return this.$store.getters.getTodoById(this.$route.params.id);
    },
    showEditDeskripsi() {
      return this.getTodo.detailIsEdit;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      this.$store.dispatch("ubahDeskripsi", {
        id: this.getTodo.id,
        value: false,
      });
    },
    onUbahDeskripsi() {
      this.$store.dispatch("ubahDeskripsi", {
        id: this.getTodo.id,
        value: true,
      });
      this.editing = this.getTodo.deskripsi;
    },
    onSimpan() {
      this.$store.dispatch("saveDeskripsi", {
        id: this.getTodo.id,
        edited: this.editing,
      });
    },
  },
  mounted() {
    if (this.getTodo.detailIsEdit) {
      this.editing = this.getTodo.deskripsi;
    }
  },
};
</script>
