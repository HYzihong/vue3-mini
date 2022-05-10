/*
 * @Author: hy
 * @Date: 2022-05-09 23:09:33
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-10 22:50:58
 * @FilePath: /vue3-mini/src/reactivity/tests/effect.spec.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import reactive from '../reactive'
import effect from '../effect'

describe('effect', () => {
  // 最核心的流程
  it.skip("happy path", () => {
    const user = reactive({
      age: 10,
    })
    let nextAge;
    effect(() => {
      nextAge = user.age + 1
    })
    expect(nextAge).toBe(11)

    // update
    // user.age++
    // expect(nextAge).toBe(12)

  })
})