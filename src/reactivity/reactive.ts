/*
 * @Author: hy
 * @Date: 2022-05-09 23:26:19
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-11 22:48:00
 * @FilePath: /vue3-mini/src/reactivity/reactive.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import { track, trigger } from "./effect"

export default function reactive(raw: any): any {
  return new Proxy(raw, {
    get(target, key) {
      // base {foo:1}
      // key fpp
      // target {foo:1}
      const res = Reflect.get(target, key)
      track(target, key)
      return res
    },
    set(target, key, value) {
      const res = Reflect.set(target, key, value)
      trigger(target, key)
      return res
    }
  })
}