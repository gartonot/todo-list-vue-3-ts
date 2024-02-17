<script lang="ts" setup>
interface IProps {
  href?: string
}

withDefaults(defineProps<IProps>(), {
  href: '/',
});

</script>

<template>
  <a :href="href" class="logo">
    ToDo
  </a>
</template>

<style lang="scss" scoped>
.logo {
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
}
</style>
