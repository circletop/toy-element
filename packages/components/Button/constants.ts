import type { InjectionKey } from "vue";
import type { ButtonGroupContext } from "./types";

// 定义按钮组provide的key
export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext> =
  Symbol("buttonGroupContext");