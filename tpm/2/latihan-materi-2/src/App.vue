<script setup>
import { ref } from 'vue'

const todolist = ref([])
const todo = ref('')

const onTambahkan = () => {
  if (todo.value != '') {
    todolist.value.push(todo.value)
  }
  todo.value = ''
}
</script>

<template>
  <main>
    <ol v-if="todolist.length > 0">
      <li v-for="(item, index) in todolist" :key="index">{{ item }}</li>
    </ol>
    <input type="text" v-model="todo" />
    <button @click="onTambahkan">Tambahkan</button>
    <div v-if="todolist.length >= 4">Hebat!</div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
