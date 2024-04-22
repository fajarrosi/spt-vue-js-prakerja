<template>
  <div id="app">
    <h2 class="pl-4 pt-4 font-semibold text-4xl">Todo List</h2>
    <div class="flex flex-col gap-y-4 mt-4 px-4">
      <ItemTodo
        v-for="(item, index) in getTodos"
        :key="index"
        v-bind="dataItem(item, index)"
      />
      <form @submit.prevent="onTambahkan" class="flex gap-x-3 items-center">
        <input
          type="text"
          class="grow border border-black p-2"
          v-model="newTodo"
          required
        />
        <button
          class="p-2 bg-green-500 hover:bg-green-700 rounded-lg text-white"
          type="submit"
        >
          Tambahkan
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import ItemTodo from "../components/ItemTodo.vue";
import uniqueId from "lodash.uniqueid";
export default {
  name: "HomeView",
  components: {
    ItemTodo,
  },
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    onTambahkan() {
      if (this.newTodo != "") {
        this.$store.dispatch("saveTodo", {
          todo: this.newTodo,
          isEdit: false,
          id: uniqueId(),
          detail: "",
          detailIsEdit: false,
        });
      } else {
        alert("Todo tidak boleh kosong");
      }
      this.newTodo = "";
    },
    dataItem(item, index) {
      return {
        ...item,
        index: index + 1,
      };
    },
  },
  computed: {
    getTodos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style></style>
