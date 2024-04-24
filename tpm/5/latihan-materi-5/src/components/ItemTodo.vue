<template>
  <div class="flex gap-x-3 cursor-pointer" @click="toDetail">
    <div class="grow flex gap-x-1">
      <div class="index">{{ index }}</div>
      <input
        type="text"
        class="grow border border-black p-2"
        v-if="isEdit"
        v-model="editing"
        @click.stop
      />
      <div class="item" v-else>{{ todo }}</div>
    </div>
    <button
      class="p-2 bg-red-500 hover:bg-red-700 rounded-lg text-white"
      @click.stop="onDelete()"
    >
      Hapus
    </button>
    <button
      class="p-2 bg-sky-500 hover:bg-sky-700 rounded-lg text-white"
      @click.stop="onEdit(index)"
    >
      {{ labelEdit }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    todo: {
      type: String,
      required: true,
    },
    isEdit: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      editing: "",
    };
  },
  methods: {
    onDelete() {
      this.$store.dispatch("deleteTodo", this.$props);
    },
    onEdit() {
      if (!this.isEdit) {
        this.editing = this.todo;
      }
      this.$store.dispatch("editTodo", {
        index: this.index,
        edited: this.editing,
      });
    },
    toDetail() {
      this.$router.push({ name: "detail-page", params: { id: this.id } });
    },
  },
  computed: {
    labelEdit() {
      return this.isEdit ? "Simpan" : "Edit";
    },
  },
};
</script>
