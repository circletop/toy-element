<template>
  <component
    :is="props.tag"
    ref="_ref"
    :type="props.tag === 'button'?props.nativeType: void 0"
    class="cr-button"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`cr-button--${type}`]: type,
      [`cr-button--${size}`]: size,
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
    name: 'CrButton'
    
  })

  const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    nativeType: 'button'
  })
  const slot = defineSlots()
  const _ref= ref<HTMLButtonElement>()
</script>

<style scoped>
@import "./style.css";
</style>