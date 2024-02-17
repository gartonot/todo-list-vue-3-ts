<script lang="ts" setup>
import { ref } from 'vue';

import TheLogo from '@/components/TheLogo.vue';
import AppInput from '@/components/ui/AppInput.vue';
import AppButton from '@/components/ui/AppButton.vue';
import MagnifierIcon from '@/components/icons/MagnifierIcon.vue';

const inputValue = ref('');
</script>

<template>
  <header class="header">
    <TheLogo /> 
    <AppInput 
      v-model:value="inputValue"
      type="search"
      placeholder="Поиск по задачам.."
      class="header__search"
    >
      <template #innerAppendIcon>
        <MagnifierIcon />
      </template>
    </AppInput>
    <AppButton 
      label="Добавить задачу"
      class="header__button-add"
    />
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;

  &__search {
    margin-left: auto;
  }
  &__button-add {
    margin-left: 10px;
  }
}
</style>
