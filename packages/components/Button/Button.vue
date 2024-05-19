<template>
  <component
    :is="props.tag"
    ref="_ref"
    :type="props.tag === 'button'?props.nativeType: void 0"
    class="er-button"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-disabled': disabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
    }"
  >
  <slot></slot>
  </component>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
import type { ButtonProps } from './types'

  defineOptions({
    name: 'ErButton'
    
  })

  const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    nativeType: 'button'
  })
  const slot = defineSlots()
  const _ref= ref<HTMLButtonElement>()
</script>

<style scoped>

</style>