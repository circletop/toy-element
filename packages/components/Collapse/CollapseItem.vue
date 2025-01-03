<template>
  <div class="cr-collapse-item">
    <button 
    type="button"
     class="cr-collapse-item__header"
     :tabindex="disabled ? -1 : 0"
     @click="handleHeaderClick"

     >
     <slot name="title">{{ title }}</slot>
     <slot name="icon"> 
      <cr-icon :icon="isActive? 'angle-down': 'angle-right'"></cr-icon>
      <!-- <cr-icon :icon="'angle-up'"></cr-icon> -->
     </slot>
    </button>
    <div 
      class="cl-collapse-item__wrap" 
      v-show="isActive">
      <div class="cr-collapse-item__content">
        <slot />
      </div>

    </div>
    
  </div>
</template>

<script setup lang="ts">
  import { getCurrentInstance, inject, unref } from 'vue';
  import { useCollapseItem } from './use-collapse-item';
  import CrIcon from '../Icon/Icon.vue';
  
  import type { CollapseItemProps } from './types'
  defineOptions({
    name: 'CrCollapseItem'
  });

  const props = defineProps<CollapseItemProps>();
  const { handleHeaderClick, isActive } = useCollapseItem(props);

</script>

<style scoped>
@import './style.css';
</style>