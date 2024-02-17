<script lang="ts" setup>
import type { ITodoItem } from '@/interfaces'

interface IProps {
  todo: ITodoItem
}

defineProps<IProps>()
</script>

<template>
  <div class="todo-item">
    {{ todo }}
  </div>
</template>
