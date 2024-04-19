<template>
  <div class="flex gap-x-3">
    <div class="grow flex gap-x-1">
      <div class="index">{{ index }}</div>
      <input
        type="text"
        class="grow border border-black p-2"
        v-if="isEdit"
        :value="editing"
        @input="onUpdateEditing"
      />
      <div class="item" v-else>{{ todo }}</div>
    </div>
    <button
      class="p-2 bg-red-500 hover:bg-red-700 rounded-lg text-white"
      @click="onDelete($props)"
    >
      Hapus
    </button>
    <button
      class="p-2 bg-sky-500 hover:bg-sky-700 rounded-lg text-white"
      @click="onEdit(index)"
    >
      Edit
    </button>
  </div>
</template>

<script>
export default {
  props: {
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
    onDelete(item) {
      this.$emit("onDelete", item);
    },
    onEdit(index) {
      this.editing = this.todo;
      this.$emit("onEdit", index);
    },
    onUpdateEditing(event) {
      this.editing = event.target.value;
      this.$emit("onUpdateEdit", this.editing);
    },
  },
};
</script>
