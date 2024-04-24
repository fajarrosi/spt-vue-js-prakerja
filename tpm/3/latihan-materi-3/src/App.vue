<template>
  <div id="app">
    <ol v-if="showList">
      <ItemTodo v-for="(item, index) in todolist" :key="index" :item="item" />
    </ol>
    <input type="text" v-model="todo" />
    <button @click="onTambahkan">Tambahkan</button>
    <div v-if="showListMorethan4">Hebat!</div>
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
      todolist: [],
      todo: "",
    };
  },
  methods: {
    onTambahkan() {
      if (this.todo != "") {
        this.todolist.push(this.todo);
      } else {
        alert("Todo tidak boleh kosong");
      }
      this.todo = "";
    },
  },
  computed: {
    showListMorethan4() {
      return this.todolist.length >= 4;
    },
    showList() {
      return this.todolist.length > 0;
    },
  },
};
</script>

<style></style>
