<template>
  <div class="cr-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type {CollapseProps, CollapseItemName, CollapseEmits} from './types'
  import { useCollapse } from './use-collapse';

  defineOptions({
    name: 'CrCollapse'
  });
  const props = withDefaults(defineProps<CollapseProps>(), {
    accordion: false,
    modelValue: ()=> [] as CollapseItemName[]
  });
  const emit = defineEmits({
    'update:modelValue': (names: CollapseItemName | CollapseItemName[]) => { },
    'change': (names: CollapseItemName | CollapseItemName[]) => { }
  });
  const { activeNames, setActiveNames } = useCollapse(props, emit);
  defineExpose({
    activeNames,
    setActiveNames
  });

</script>

<style>
@import './style.css';
</style>