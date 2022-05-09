/**
 * @Author: hy
 * @Date: 2022-05-09 22:57:23
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-05-09 22:57:24
 * @FilePath: /vue3-mini/babel.config.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
