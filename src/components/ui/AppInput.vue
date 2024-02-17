<script lang="ts" setup>
import { useSlots, ref } from 'vue';
import CrossIcon from '@/components/icons/CrossIcon.vue';

type TTypes = 'text' | 'password' | 'search';

interface IProps {
  value: string,
  label?: string,
  type?: TTypes,
  placeholder?: string,
}
interface IEmits {
  (event: 'update:value', value: string): void,
}

const props = withDefaults(defineProps<IProps>(), {
  label: '',
  type: 'text',
  placeholder: '',
})
const emits = defineEmits<IEmits>()

const slots = useSlots()

const inputRef = ref<HTMLElement | null>(null);
const labelIsShown = props.label.length
const innerAppendIconIsShown = !!slots.innerAppendIcon

const updateValue = (event: Event) => {
  const inputElement = event.target as HTMLInputElement
  emits('update:value', inputElement.value)
};

const focusInput = () => {
  if(inputRef.value) {
    inputRef.value.focus()
  }
}
const clearInput = () => {
  emits('update:value', '')
}
</script>

<template>
  <label class="label" @click="focusInput()" tabindex="-1">
    <span v-if="labelIsShown" class="label__text">{{ label }}</span>
    <div class="label__input-wrapper">
      <button v-if="innerAppendIconIsShown" tabindex="-1" class="icon inner-append-icon">
        <slot name="innerAppendIcon" />
      </button>
      <input 
        ref="inputRef"
        :type="type" 
        :placeholder="placeholder"
        :value="value"
        :class="['label__input', { 'input-with-append-icon': innerAppendIconIsShown }]"
        @input="updateValue($event)"
      />
      <button 
        v-if="value.length" 
        class="icon delete-icon" 
        @click="clearInput()"
      >
        <slot name="deleteIcon">
          <CrossIcon />
        </slot>
      </button>
    </div>
  </label>
</template>

<style lang="scss" scoped>
.icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  padding: 0;
  width: var(--size);
  height: var(--size);
  display: grid;
  place-items: center;
  cursor: pointer;
}
.inner-append-icon {
  --size: 20px;
  left: 12px;
  color: $color-black;
  opacity: 0.75;
}
.delete-icon {
  --size: 12px;
  right: 12px;
  color: $color-error;
}
.label {
  display: flex;
  flex-direction: column;

  &__text {
    font-weight: 700;
  }
  &__input-wrapper {
    position: relative;
  }
  &__input {
    height: 44px;
    padding: 12px;
    padding-right: 36px;
    background-color: rgba($color-black, 4%);
    border: 1px solid transparent;
    border-radius: 4px;
    width: 100%;

    &.input-with-append-icon {
      padding-left: 40px;
    }
    &:focus-visible {
      outline: $color-primary;
    }
    &:focus {
      border-color: $color-primary;
    }
  }
}

input[type="search"]::-webkit-search {
  &-decoration,
  &-cancel-button,
  &-results-button,
  &-results-decoration {
    display: none;
  }
}
</style>
