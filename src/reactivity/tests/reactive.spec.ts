/*
 * @Author: hy
 * @Date: 2022-05-09 23:16:02
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-10 22:40:31
 * @FilePath: /vue3-mini/src/reactivity/tests/reactive.spec.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import reactive from "../reactive"
// pnpm run test:reactive
describe('reactive', () => {
  // 最核心的流程
  it('happy path', () => {
    const original = { foo: 1 }
    const observed = reactive(original)
    expect(observed).not.toBe(original)
    expect(observed.foo).toBe(1)
  })
})