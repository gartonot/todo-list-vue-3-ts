<script lang="ts" setup>
import TheHeader from '@/components/TheHeader.vue';
import AppTodos from '@/components/AppTodos/AppTodos.vue';
</script>

<template>
  <div class="app">
    <TheHeader />
    <AppTodos class="app__todos" />
  </div>
</template>

<style lang="scss" scoped>
.app {
  padding-top: 26px;

  &__todos {
    margin-top: 35px;
  }
}
</style>
