import type { Ref } from 'vue'
export type CollapseItemName = string | number

export type CollapseProps = {
  modelValue: CollapseItemName[],
  accordion?: boolean;
};

export type CollapseItemProps = {
  name: CollapseItemName;
  title?: string,
  disabled?: boolean
}
export interface CollapseContext {
    activeNames: Ref<CollapseItemName[]>;
    handleItemClick: (names: CollapseItemName) => void;
}

export type CollapseEmits = {
  'update:modelValue': (names: CollapseItemName[]) => void;
  'change': (names: CollapseItemName[]) => void;
}