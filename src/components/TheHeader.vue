<script lang="ts" setup>
import { ref } from 'vue';

import TheLogo from '@/components/TheLogo.vue';
import AppInput from '@/components/ui/AppInput.vue';
import AppButton from '@/components/ui/AppButton.vue';
import MagnifierIcon from '@/components/icons/MagnifierIcon.vue';

const inputValue = ref('');
</script>

<template>
  <header class="header container">
    <TheLogo tabindex="-1" />
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
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  &__search {
    order: 1;
    width: 100%;

    @include media-mobile {
      order: 0;
      width: fit-content;
      margin-left: auto;
    }
  }
  &__button-add {
    margin-left: auto;
    font-size: 12px;

    @include media-mobile {
      margin-left: 10px;
      font-size: 16px;
    }
  }
}
</style>
