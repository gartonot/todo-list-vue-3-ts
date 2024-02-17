<script lang="ts" setup>
import TodoItem from '@/components/AppTodos/TodoItem.vue';
import { ITodoItem } from '@/interfaces';
import { EnumCategory, EnumStatusTodo } from '@/enums';

let todoList: ITodoItem[] = [
  { 
    id: 0,
    title: 'Создание логотипа',
    category: {
      name: EnumCategory.DESIGN,
      color: EnumCategory.DESIGN_COLOR,
    },
    status: EnumStatusTodo.TO_DO,
    text: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом.',
  },
  { 
    id: 1,
    title: 'Создание логотипа',
    category: {
      name: EnumCategory.TESTING,
      color: EnumCategory.TESTING_COLOR,
    },
    status: EnumStatusTodo.IN_PROGRESS,
    text: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом.',
  },
  { 
    id: 2,
    title: 'Создание логотипа',
    category: {
      name: EnumCategory.DEVELOP,
      color: EnumCategory.DEVELOP_COLOR,
    },
    status: EnumStatusTodo.COMPLETED,
    text: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом.',
  },
]

todoList = [...todoList, ...todoList, ...todoList, ...todoList, ...todoList]; 
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
        class="todo-list__item"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.todo-list {
  --gap: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  margin-top: 24px;

  &__item {
    --count-card: 1;
    flex: 1 0 calc(100% / var(--count-card) - var(--gap));

    @include media-mobile {
      --count-card: 2;
    }
    @include media-tablet {
      --count-card: 3;
    }
  }
}
</style>
