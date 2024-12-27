import { ref, watch, provide } from 'vue';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from "@circle-ui/constants";
import { COLLAPSE_CTX_KEY } from './constants';
import type { CollapseProps, CollapseItemName, CollapseEmits } from './types';
import type {SetupContext} from 'vue'
export const useCollapse = (props: CollapseProps, emit: SetupContext<CollapseEmits>['emit']) => {
  const activeNames = ref(props.modelValue)
  const setActiveNames = (_activeNames: CollapseItemName[]) => {
    activeNames.value = _activeNames 
    const value = props.accordion ? activeNames.value[0] : activeNames.value
    emit(UPDATE_MODEL_EVENT, value)
    emit(CHANGE_EVENT, value)
  }
  const handleItemClick = (name: CollapseItemName) => {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? '' : name])
    } else {
      const _activeNames = [...activeNames.value]
      const index = _activeNames.indexOf(name)
      if (index > -1) {
        _activeNames.splice(index, 1)
      } else {
        _activeNames.push(name)
      }
      setActiveNames(_activeNames)
    }
  }
  watch(() => props.modelValue, () => (activeNames.value = props.modelValue), { deep: true })
  provide(COLLAPSE_CTX_KEY, {
    activeNames,
    handleItemClick
  })

  return {
    activeNames,
    setActiveNames
  }
}