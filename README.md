---
title: 👉Live2dLoader-web-集成渲染库
password: ""
tags:
  - live2d
  - JavaScript
katex: false
comments: true
aside: true
date: 2022-03-26 12:46:57
cover: https://pan.weidows.tech/d/local/blog/RXQjJq.png
top_img:
---

<h2>

- # 👉Live2dLoader👈

</h2>

![](https://pan.weidows.tech/d/local/blog/ooFTjM.png)

[⏩ 文章地址/示例博客](https://weidows.github.io/post/lang/JavaScript/Live2dLoader/README) | [✔️ 仓库地址](https://github.com/Weidows-projects/Live2dLoader) | [👀 示例页面](https://weidows-projects.github.io/Live2dLoader/) 欢迎提交 pr !

<!--
 * @?: live2d************************************************
 * @Author: JavaScripteidows
 * @Date: 2022-03-20 22:26:55
 * @LastEditors: Weidows
 * @LastEditTime: 2024-08-07 13:24:08
 * @FilePath: \Blog-private\source\_posts\Web\JavaScript\Live2dLoader\README.md
 * @Description:
 * @!: *********************************************************************
-->

- [x] 支持 live2d 所有版本的 web 渲染库
- [x] 支持鼠标点击互动
- [x] 2022.3.26 新增支持 [多模型] 异步加载 + 每日恒定随机模型 (每天更换自定义列表内随机模型,当日不再随刷新而替换)
- [x] 2022.5.23 已支持模型号越界判定,自动缩小到给定范围
- [x] 2022.6.28 鼠标穿透/防遮挡 + 支持眼球跟踪 + 模型缩放 API
- [x] 2023.2.7 拖动功能已修复

<a>![分割线](https://pan.weidows.tech/d/local/img/divider.png)</a>

## 如何添加

- 必要的头文件: <sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup> <sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>

  ```html
  <script src="https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js"></script>
  <script src="https://fastly.jsdelivr.net/combine/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js,npm/pixi.js@6.5.2/dist/browser/pixi.min.js,npm/pixi-live2d-display/dist/index.min.js,gh/Weidows-projects/Live2dLoader/dist/Live2dLoader.min.js"></script>
  ```

- 以及自定义的 js, 单个/多个模型都可以, 但只显示一个, 想要多个可以多 new 几个

  ```js
  addEventListener("DOMContentLoaded", function () {
    let models = [
      {
        width: 1280,
        height: 768,
        left: "0px",
        bottom: "0px",
        role: "https://fastly.jsdelivr.net/gh/alg-wiki/AzurLaneL2DViewer@gh-pages/assets/bisimai_2/bisimai_2.model3.json",
        background: "",
        opacity: 1,
        mobile: false,
        draggable: true,
      },
      {
        width: 800,
        height: 600,
        right: "0px",
        bottom: "0px",
        role: "https://fastly.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json",
        background: "",
        opacity: 0.7,
      },
    ];
    new Live2dLoader(models);
  });
  ```

<a>![分割线](https://pan.weidows.tech/d/local/img/divider.png)</a>

## 比如 Hexo

添加到主题的 \_config.yml

js 代码可以写完参数后 [压缩为一行](https://c.runoob.com/front-end/51/),一起添加到下面;

当然也可以魔改框架源码,此处不再赘述.

```yaml
inject:
  head:
    # - <link rel="stylesheet" href="/xxx.css">
    - <script src="https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js"></script>
    - <script src="https://fastly.jsdelivr.net/combine/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js,npm/pixi.js@6.5.2/dist/browser/pixi.min.js,npm/pixi-live2d-display/dist/index.min.js,gh/Weidows-projects/Live2dLoader/dist/Live2dLoader.min.js"></script>
  bottom:
    # - <script src="xxxx"></script>
    - <script>addEventListener("DOMContentLoaded",function(){let models=[{width:1280,height:768,left:"0px",bottom:"0px",role:"https://fastly.jsdelivr.net/gh/alg-wiki/AzurLaneL2DViewer@gh-pages/assets/bisimai_2/bisimai_2.model3.json",background:"",opacity:1,mobile:false,draggable:true,},{width:800,height:600,right:"0px",bottom:"0px",role:"https://fastly.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json",background:"",opacity:0.7,},];new Live2dLoader(models)})</script>
```

<a>![分割线](https://pan.weidows.tech/d/local/img/divider.png)</a>

## 可选参数

| 参数                  | Type          | Default       | Description                                                                                                                                                                  |
| --------------------- | ------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width                 | 可选[Number]  | 800           | 宽度，单位为 px                                                                                                                                                              |
| height                | 可选[Number]  | 600           | 长度，单位为 px                                                                                                                                                              |
| top,right,bottom,left | 可选[String]  | bottom: '0px' | 模型到浏览器各边框的距离。选择两个即可定位，如定位在左下角：left: '0px' , bottom: '0px'                                                                                      |
| role                  | 必须[String]  | ""            | 角色模型 xxx.model.json 文件 URL </br> [alg-wiki/AzurLaneL2DViewer](https://github.com/alg-wiki/AzurLaneL2DViewer) </br> [imuncle/live2d](https://github.com/imuncle/live2d) |
| background            | 可选[String]  | ""            | 背景图片，可填入图片外链                                                                                                                                                     |
| opacity               | 可选[Number]  | 1             | 模型透明度，(0,1] 取值                                                                                                                                                       |
| mobile                | 可选[boolean] | false         | 移动端(手机)是否显示                                                                                                                                                         |
| scale                 | 可选[Number]  | 0.1           | 模型缩放比例，(0,1] 取值                                                                                                                                                     |
| draggable             | 可选[boolean] | false         | 是否允许拖动                                                                                                                                                                 |
| pierceThrough         | 可选[boolean] | true          | 是否开启鼠标穿透                                                                                                                                                             |

<a>![分割线](https://pan.weidows.tech/d/local/img/divider.png)</a>

## 调用结构

```
Live2dLoader(config)
  -> Live2dLoader.min.js
    -> PIXI.min.js                (canvas-app)
    -> index.min.js               (live2d-model, cubism2 + cubism3/4)
      -> live2dcubismcore.min.js  (cubism3/4)
      -> live2d.min.js            (cubism2, 旧版模型需要)
```

<a>![分割线](https://pan.weidows.tech/d/local/img/divider.png)</a>

## Q-A

### 模型问题报错

- 关于报错含有 `reading ‘_ptr’` 的, 是模型不适配问题 (#2)

  ```
  live2dcubismcore.min.js:1
  Uncaught TypeError: Cannot read properties of null (reading ‘_ptr’)
  at new Model (live2dcubismcore.min.js:1:138485)
  at Function.Model.fromMoc (live2dcubismcore.min.js:1:138707)
  at l2d.js💯60
  at t.value (mini-signals.js:93:1)
  at e.t._onComplete (Loader.js:568:1)
  at Loader.js:608:1
  at s (async.js:27:1)
  at e. (interactiveTarget.js:82:5)
  at Loader.js:590:1
  at async.js:35:1
  ```

  ~~检验过并不是配置文件哪里有问题, 单纯是二进制模型 .png/.moc3 问题, 想修复的话要修复模型~~

  already fixed now.

---

### 怎么刷新

![](https://pan.weidows.tech/d/local/blog/ZRyZgz.png)

---

### 模型大小问题

对于评论中提到的模型显示太小, 现在可以设置 `scale` 参数来解决了

<a>![分割线](https://pan.weidows.tech/d/local/img/divider.png)</a>

## 借物表

> 项目原版基于[AzurLaneL2DViewer](https://github.com/alg-wiki/AzurLaneL2DViewer)修改, 后完全重构 API 到[guansss/pixi-live2d-display](https://github.com/guansss/pixi-live2d-display/blob/master/README.zh.md)

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js (license 规定不可再分发)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: live2dcubismcore_v2: https://fastly.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js

<a name='cite_note-3' href='#cite_ref-3'>[3]</a>: [再见 Z16，Hi Laffey！ || 陈 YF の博客(￣ ▽ ￣)&#34;](https://blog.cyfan.top/p/a12e0ab7.html)

[![Star History Chart](https://api.star-history.com/svg?repos=Weidows-projects/Live2dLoader&type=Date)](https://star-history.com/#Weidows-projects/Live2dLoader&Date)
