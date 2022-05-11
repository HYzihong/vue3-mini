/*
 * @Author: hy
 * @Date: 2022-05-10 22:41:20
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-11 22:47:43
 * @FilePath: /vue3-mini/src/reactivity/effect.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */

class ReactiveEffect {
  private _fn: any
  constructor(fn: any) {
    this._fn = fn
  }
  run() {
    activeEffect = this //  activeEffect  => ReactiveEffect
    // 执行传进来的fn
    this._fn()
  }
}

const targetMap = new Map()
export function track(target: any, key: any) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    // 初始化
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let dep = depsMap.get(key)
  if (!dep) {
    // 初始化
    dep = new Set()
    depsMap.set(key, dep)
  }
  dep.add(activeEffect)
}

export function trigger(target: any, key: any) {
  let depsMap = targetMap.get(target);
  let dep = depsMap.get(key);

  for (const effect of dep) {
    effect.run();
  }
}

let activeEffect: ReactiveEffect
export function effect(fn: any) {
  const _effect = new ReactiveEffect(fn)

  _effect.run()

}