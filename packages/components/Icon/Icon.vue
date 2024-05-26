<template>
  <i 
    class="cr-Icon"
    :class="[`cr-icon-${type}`]"
    :style="customStyle"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps"></font-awesome-icon>
  </i>
</template>

<script setup lang="ts">
  import type { IconProps } from './types' 
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { computed } from 'vue'
  import { omit } from 'lodash-es';
  
  defineOptions({
    name: 'CrIcon',
    inheritAttrs: false, // 禁用自动挂载到组件根元素上的没有在props声明的属性
  })

  const props = defineProps<IconProps>()

  const filterProps = computed(() => omit(props, ['type', 'color']))
  const customStyle = computed(() => ({
      color: props.color??void 0
    }))

</script>

<style scoped>
@import './style.css'

</style>