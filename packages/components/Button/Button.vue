<script setup lang="ts">
  import { ref, computed, inject } from 'vue';
  import { BUTTON_GROUP_CTX_KEY } from './constants';
  import type { ButtonProps, ButtonEmits, ButtonInstance } from './types'
  import { throttle } from 'lodash-es';
import CrIcon from '../Icon/Icon.vue';

  defineOptions({
    name: 'CrButton'
    
  })

  const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    nativeType: 'button',
    useThrottle: true,
    throttleDuration: 300
  })
  const emits = defineEmits<ButtonEmits>()

  const slots = defineSlots()

  const _ref = ref<HTMLButtonElement>()
  const buttonGroupCtx = inject(BUTTON_GROUP_CTX_KEY)

  const iconStyle = computed(() => ({
    marginRight: slots.default ? '6px' : 0,
  }))

  const disabled = computed(() => props.disabled || (buttonGroupCtx?.disabled ?? false))
  const type = computed(() => buttonGroupCtx?.type ?? props.type)
  const size = computed(() => buttonGroupCtx?.size ?? props.size)

  const handleButtonClick = (e: MouseEvent) => emits('click', e)
  const handleThrottleClick = throttle(handleButtonClick, props.throttleDuration)
  defineExpose<ButtonInstance>(
    {
      ref: _ref
    }
  )
</script>

<template>
  <component
    ref="_ref"
    class="cr-button"
    :is="tag"
    :autofocus="autoFocus"
    :type="tag === 'button'?nativeType: void 0"
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
    @click="(e: MouseEvent) => useThrottle ? handleThrottleClick(e) : handleButtonClick(e)"
  >
  <!-- 图标 -->
  <template v-if="loading">
    <slot name="loading">
      <cr-icon
        class="loading-icon"
        size="1x"
        :icon="loadingIcon?? 'spinner'"
        :style="iconStyle"
        ></cr-icon>
      </slot>
  </template>
  <cr-icon
    size="1x"
    v-if="icon && !loading"
    :style="iconStyle"
    :icon="icon">
  </cr-icon>
  <!-- 默认插槽 -->
  <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>