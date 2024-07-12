import type { Component, Ref } from "vue";

export type ButtonType = "primary" | "success" | "warning" | "info" | 'danger';
export type NativeType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'large' | 'default' | 'small';

export interface ButtonProps {
  /** tag */
  tag?: string | Component;
  /** 按钮类型 */
  type?: ButtonType;
  /** 按钮大小 */
  size?: ButtonSize;
  /** 按钮原生类型 */
  nativeType?: NativeType;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中 */
  loading?: boolean;
  /** 是否朴素按钮 */
  plain?: boolean;
  /** 是否圆角按钮 */
  round?: boolean;
  /** 是否圆形按钮 */
  circle?: boolean; 
  /** 自定义图标 */
  icon?: string;
  /** loading图标 */
  loadingIcon?: string;
 /** 是否自动获取焦点 */
  autoFocus?: boolean;
  /** 是否开启节流模式 */
  useThrottle?: boolean;
  throttleDuration?: number;
}

export interface ButtonEmits {
  (e: 'click', val: MouseEvent): void; 
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>
}
export interface ButtonGroupProps {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}

export interface ButtonGroupContext {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}
