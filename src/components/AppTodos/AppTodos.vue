<script lang="ts" setup>
import TodoItem from '@/components/AppTodos/TodoItem.vue';
import { ITodoItem } from '@/interfaces';
import { EnumCategory, EnumStatusTodo } from '@/enums';

const todoList: ITodoItem[] = [
{ 
    id: 0,
    title: 'Создание логотипа',
    category: EnumCategory.DESIGN,
    status: EnumStatusTodo.IN_PROGRESS,
  },
  { 
    id: 1,
    title: 'Создание логотипа',
    category: EnumCategory.TESTING,
    status: EnumStatusTodo.IN_PROGRESS,
  },
]
</script>

<template>
  <section class="container">
    <h1>Список задач</h1>
    <!-- Filter --> 
    <!-- TaskList -->
    
    <div class="todo-list">
      <TodoItem
        v-for="todo in todoList"
        :key="todo.id"
        :todo="todo"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
</style>
