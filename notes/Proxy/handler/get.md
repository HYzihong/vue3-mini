<!--
 * @Author: hy
 * @Date: 2022-05-10 22:01:09
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-05-10 22:05:38
 * @FilePath: /vue3-mini/notes/Proxy/handler/get.md
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
-->

# `handler.get()`

用于拦截对象的读取属性操作

### parameters

- `target` 目标对象。
- `property` 被获取的属性名。
- `receiver` Proxy 或者继承 Proxy 的对象

### Return value

get 方法可以返回任何值。

### 拦截

该方法会拦截目标对象的以下操作:

- 访问属性: `proxy[foo]`和 `proxy.bar`
- 访问原型链上的属性:` Object.create(proxy)[foo]`
- `Reflect.get()`

### 约束

如果违背了以下的约束，proxy 会抛出 TypeError:

- 如果要访问的目标属性是不可写以及不可配置的，则返回的值必须与该目标属性的值相同。
- 如果要访问的目标属性没有配置访问方法，即 get 方法是 undefined 的，则返回值必须为 undefined。
