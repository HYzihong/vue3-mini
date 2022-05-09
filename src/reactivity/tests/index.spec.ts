/*
 * @Author: hy
 * @Date: 2022-05-09 22:58:13
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-09 22:58:14
 * @FilePath: /vue3-mini/src/reactivity/tests/index.spec.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import { add } from "../index";

it("init", () => {
  expect(add(1, 1)).toBe(2);
});