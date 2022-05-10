<!--
 * @Author: hy
 * @Date: 2022-05-10 21:56:59
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-05-10 22:30:55
 * @FilePath: /vue3-mini/notes/Proxy/readme.md
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
-->

# Proxy

> [MDN:Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

`Proxy 对象 `用于创建一个对象的代理，从而实现对该对象基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

### parameters

- `handler`
  包含捕捉器（trap）的占位符对象，可译为处理器对象。
- `traps`
  提供属性访问的方法。这类似于操作系统中捕获器的概念。
- `target`
  被 Proxy 代理虚拟化的对象。它常被作为代理的存储后端。根据目标验证关于对象不可扩展性或不可配置属性的不变量（保持不变的语义）。
