<script lang="ts" setup>
type TButton = 'a' | 'button'

interface IProps {
  label: string,
  outlined?: boolean,
  href?: string,
}

const props = withDefaults(defineProps<IProps>(), {
  outlined: false,
  href: '',
})

const buttonComponent: TButton = props.href.length ? 'a' : 'button'
</script>

<template>
  <component 
    :is="buttonComponent"
    :href="href"
    class="button"
  >
    {{ label }}
  </component>
</template>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  background-color: transparent;
  padding: 11px 20px;
  color: $color-white;
  background-color: $color-primary;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 16px;
  line-height: 16px;
}
</style>
