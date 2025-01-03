import type { CollapseItemProps } from "./types"; 
import { computed, inject, ref, unref } from "vue";
import { COLLAPSE_CTX_KEY } from "./constants";

export const useCollapseItem = (props: CollapseItemProps) => {
  const collapse = inject(COLLAPSE_CTX_KEY)
  const focusing = ref(false)
  const isClick = ref(false)
  const name = computed(() => props?.name || '')
  const isActive = computed(() => {
    console.log(collapse);
    
    return collapse?.activeNames.value.includes(unref(name));
  }
  )
  const handleFocus = () => {
    setTimeout(() => {
      if (!isClick.value) {
        focusing.value = true
      } else {
        isClick.value = false
      }
    }, 50)
  }

  const handleHeaderClick = () => {
    if (props.disabled) return
    collapse?.handleItemClick(unref(name))
    focusing.value = false
    isClick.value = true
  }
  const handleEnterClick = () => {
    collapse?.handleItemClick(unref(name))
  }

  return {
    isActive,
    focusing,
    handleFocus,
    handleHeaderClick,
    handleEnterClick
  };
}