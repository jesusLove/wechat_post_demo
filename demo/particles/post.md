嗨，大家好，欢迎来到猿镇，我是镇长，lee。

又到了和大家见面的时间，今天和大家分享一款易用的 `JavaScript` 粒子效果库——`particles.js`。在网站页面开发时，引人入胜的交互效果是吸引用户眼球的关键之一。其中，粒子效果无疑是一种引人注目的视觉体验。

https://github.com/VincentGarreau/particles.js

### 什么是 particles.js？

`particles.js` 是一个轻量级、高性能的 `JavaScript` 库，专注于在网页上创建各种令人惊叹的粒子效果。这个库使用 `Canvas` 技术，让你能够轻松地在网页中生成流动、漂浮、交互式的粒子效果。

插图

### 快速上手

首先，你需要在你的项目中引入 `particles.js`。你可以通过 `CDN` 直接引入，也可以下载到本地。

```html
<!-- 使用 CDN 引入 -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

接下来，在你的 `HTML` 文件中创建一个容器，用于放置粒子效果：

```html
<div id="particles-js"></div>
```

然后，在 JavaScript 中配置和初始化 particles.js：

```html
<!-- 在 JavaScript 中配置和初始化 particles.js -->
<script>
  particlesJS("particles-js", {
    // 粒子的基本配置
    particles: {
      number: {
        value: 80,  // 粒子数量
        density: {
          enable: true,
          value_area: 800,  // 粒子分布密度
        },
      },
      color: {
        value: "#ffffff",  // 粒子颜色
      },
      shape: {
        type: "circle",  // 粒子形状，支持 circle（圆形）等
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,  // 粒子透明度
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,  // 粒子大小
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,  // 粒子间连线的距离
        color: "#ffffff",  // 粒子间连线的颜色
        opacity: 0.4,  // 粒子间连线的透明度
        width: 1,  // 粒子间连线的宽度
      },
      move: {
        enable: true,
        speed: 6,  // 粒子运动速度
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    // 交互性的配置
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",  // 鼠标悬停效果
        },
        onclick: {
          enable: true,
          mode: "push",  // 鼠标点击效果
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
</script>
```

以上代码即可在你的页面中生成一个简单的粒子效果。通过调整配置中的各种参数，你可以根据自己的需求定制出各种炫酷的效果。

插图

### 配置详解

`particles.js` 提供了丰富的配置选项，允许你自定义粒子效果的外观和行为。以下是一些常用配置的详细解释：

- `particles.number`: 粒子数量的配置，包括总数、密度等。
- `particles.color`: 粒子颜色的配置。
- `particles.shape`: 粒子形状的配置，支持圆形、多边形等。
- `particles.opacity`: 粒子透明度的配置。
- `particles.size`: 粒子大小的配置。
- `particles.line_linked`: 连线效果的配置。
- `particles.move`: 粒子运动的配置，包括速度、方向等。
- `interactivity`: 交互性配置，包括鼠标悬停、点击等效果。

### 创造更多可能

除了基本的配置，`particles.js` 还支持更多高级功能，如粒子之间的连接、交互效果的细致调整等。通过仔细研究[官方文档](https://vincentgarreau.com/particles.js/#default)，你将能够更好地理解和运用这个强大的库。

### Show Time

插图


更多

今天的分享就到这里，如果觉得对你有帮助，感谢点赞、分享、关注一波，你的认可是我创造的最大动力。

更多内容请关注公众号：猿镇，一个分享有趣前端知识的公众号。

历史文章

* [Swiper，一款超赞的 JavaScript 滑动库？](https://mp.weixin.qq.com/s/OdzNKtM-ZJoNB7dX69RtbA)
* [Vanta.js，让你的网页焕发3D魔力的JavaScript库](https://mp.weixin.qq.com/s/DUuLmYuqyjT9lqTRRKFHaQ)
* [Lodash.js，一款超赞的 JavaScript 实用工具库？](https://mp.weixin.qq.com/s/Sk8GTtSPLwOcS70pb5d9pQ)
* [medium-zoom，一款丝滑的 JavaScript 图片缩放库](https://mp.weixin.qq.com/s/8ECnEgyWW-ogkyMXhi_lbw)
* [Anime.js，一款神奇的 JavaScript 动画库](https://mp.weixin.qq.com/s/-eufnYa7DkcgJyW-N3eCNQ)
* [localForage，一款强大灵活的 JavaScript 存储库](https://mp.weixin.qq.com/s/3C0uA8Ljq0_Y6jn09kbwOA)
* [Day.js，一款轻量级 JavaScript 日期库](https://mp.weixin.qq.com/s/QNEEGPQS4G4GvFYTfxvtBQ)
* [AutoAnimate，一款零配置的 JavaScript 过渡动画库](https://mp.weixin.qq.com/s/hUwHcsQYRlSjySwj8zssMA)
* [Typed.js，一个神奇的 JavaScript 库？](https://mp.weixin.qq.com/s/Bj49cNcm6cWk-JVe3s9iNw)