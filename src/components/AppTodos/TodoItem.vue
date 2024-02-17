<script lang="ts" setup>
import { ref, computed } from 'vue'
import MoreHorizIcon from '@/components/icons/MoreHorizIcon.vue'

import type { ITodoItem, IActionList } from '@/interfaces'
import { EnumStatusTodo, EnumActionsTodoItem } from '@/enums';

interface IProps {
  todo: ITodoItem
}

const props = defineProps<IProps>()

const categoryColor = props.todo.category.color;
const actionsIsOpen = ref(false)

const actionList = computed<IActionList[]>(() => {
  let action: IActionList[] = []

  switch(props.todo.status) {
    case EnumStatusTodo.TO_DO:
      action = [{ name: EnumActionsTodoItem.ADD_IN_PROGRESS }, { name: EnumActionsTodoItem.ADD_COMPLETED }]
      break;
    case EnumStatusTodo.IN_PROGRESS:
      action = [{ name: EnumActionsTodoItem.ADD_COMPLETED }, { name: EnumActionsTodoItem.ADD_TO_DO }]
      break;
    case EnumStatusTodo.COMPLETED:
      action = [{ name: EnumActionsTodoItem.REMOVE_ITEM }, { name: EnumActionsTodoItem.ADD_TO_DO }]
      break;
  }

  return [
    ...action,
    { name: EnumActionsTodoItem.CHOSE_ITEM }
  ];
})

const actionToggler = () => actionsIsOpen.value = !actionsIsOpen.value
</script>

<template>
  <!-- TODO: Close actions panel when click outside card -->
  <article class="todo">
    <header class="todo__header">
      <div class="category">
        {{ todo.category.name }}
      </div>
      <button 
        :class="['actions', { 'actions-open': actionsIsOpen }]"
        @click="actionToggler()"
      >
        <MoreHorizIcon />
        <ul class="actions__list">
          <li 
            v-for="action in actionList" 
            :key="action.id"
            class="actions__list-item"
          >
            {{ action.name }}
          </li>
        </ul>
      </button>
    </header>
    <p class="todo__title">
      {{ todo.title }}
    </p>
    <div class="todo__body">
      {{ todo.text }}
    </div>
  </article>
</template>

<style lang="scss" scoped>
.todo {
  border: $border-default;
  border-radius: 8px;
  padding: 16px;
  padding-bottom: 0;

  &__header {
    display: flex;
    justify-content: space-between;

    .category {
      --font-size: 12px;
      --line-height: 12px;
      font-size: var(--font-size);
      line-height: var(--line-height);
      color: v-bind(categoryColor);
      font-weight: 500;

      @include media-mobile {
        --font-size: 14px;
        --line-height: 14px;
      }
      @include media-tablet {
        --font-size: 16px;
        --line-height: 16px;
      }
    }
    .actions {
      --size: 24px;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      background-color: transparent;
      border: $border-default;
      color: $color-black;
    }
  }
  &__title {
    --line-height: 22px;
    --font-size: 16px;
    font-weight: 600;
    font-size: var(--font-size);
    width: 100%;

    @include multiline-clip(var(--line-height));

    @include media-mobile {
      --line-height: 24px;
      --font-size: 18px;
    }
  }
  &__body {
    --line-height: 16px;
    --font-size: 14px;
    margin-top: 8px;
    position: relative;

    font-size: var(--font-size);
    line-height: var(--line-height);


    @include multiline-clip(var(--line-height), 3);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(transparent, #FFFFFF 65%);
    }

    @include media-mobile {
      --line-height: 20px;
      --font-size: 16px;
    }
  }

  .actions {
    position: relative;

    &__list {
      position: absolute;
      z-index: 1;
      opacity: 0;
      visibility: hidden;
      display: flex;
      flex-direction: column;
      gap: 10px;
      list-style: none;
      background-color: $color-white;
      padding: 8px 20px;
      box-shadow: 0 8px 16px rgba($color-black, 0.05);
      top: 25px;
      right: 0;
      min-width: 180px;
      text-align: right;
      border-radius: 4px;

      &-item {
        color: $color-black;
        transition: 0.3s;

        &:hover {
          color: $color-primary;
        }
      }
    }

    &.actions-open .actions__list {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
