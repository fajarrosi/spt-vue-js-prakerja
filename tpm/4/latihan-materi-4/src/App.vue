<template>
  <div id="app">
    <h2 class="pl-4 pt-4 font-semibold">Todo List</h2>
    <div class="flex flex-col gap-y-4 mt-4 px-4">
      <ItemTodo
        v-for="(item, index) in todos"
        :key="index"
        v-bind="dataItem(item, index)"
        @onDelete="onDelete"
        @onEdit="onEdit"
        @onUpdateEdit="onUpdateEdit"
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
import ItemTodo from "./components/ItemTodo.vue";

export default {
  name: "App",
  components: {
    ItemTodo,
  },
  data() {
    return {
      todos: [],
      newTodo: "",
      editTodo: "",
    };
  },
  methods: {
    onTambahkan() {
      if (this.newTodo != "") {
        this.todos.push({
          todo: this.newTodo,
          isEdit: false,
        });
      } else {
        alert("Todo tidak boleh kosong");
      }
      this.newTodo = "";
    },
    onDelete(item) {
      this.todos.splice(this.todos.indexOf(item), 1);
    },
    onEdit(index) {
      const edit = this.todos[index - 1];
      if (!edit.isEdit) {
        this.todos[index - 1].isEdit = true;
        this.editTodo = edit.todo;
      } else {
        this.todos[index - 1].todo = this.editTodo;
        this.todos[index - 1].isEdit = false;
        this.editTodo = null;
      }
    },
    dataItem(item, index) {
      return {
        ...item,
        index: index + 1,
      };
    },
    onUpdateEdit(value) {
      this.editTodo = value;
    },
  },
};
</script>

<style></style>
