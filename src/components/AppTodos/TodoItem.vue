<script lang="ts" setup>
import MoreHorizIcon from '@/components/icons/MoreHorizIcon.vue'

import type { ITodoItem } from '@/interfaces'

interface IProps {
  todo: ITodoItem
}

const props = defineProps<IProps>()

const categoryColor = props.todo.category.color;
</script>

<template>
  <article class="todo">
    <header class="todo__header">
      <div class="category">
        {{ todo.category.name }}
      </div>
      <button class="actions">
        <MoreHorizIcon />
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
}
</style>
