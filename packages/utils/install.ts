import type {App, Plugin } from 'vue'
import { each } from 'lodash-es'

type SFCWithInstall<T> = T & Plugin


// 安装组件
export function makeInstall (components:Plugin[]) {
  const install = (app: App) => each(components, c => app.use(c))
  return install as Plugin
}

// 给组件添加install方法
export const withInstall=<T>(component:T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const { name } = (component as any) 
    app.component(name, component as Plugin)
  }
  return component as SFCWithInstall<T>
}