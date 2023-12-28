嗨，大家好，欢迎来到猿镇，我是镇长，lee。

好久不见，今天和大家分享一款伪 3D JavaScript 动画引擎库。


# 什么是 Zdog ？

`Zdog` 是一款用于 Web 开发的伪3D引擎库，其原理基于 `Canvas 2D` 上下文，采用等距透视技术在二维画布上模拟三维效果。`Zdog` 的特点在于其轻量级和简单易用的设计，使得开发者能够以直观的方式创建引人入胜的三维图形。

`Zdog` 将图形表示为路径，并通过向量运算来控制位置、旋转和缩放等变换。图形具有层次结构，可以嵌套和组合，构建出复杂的场景。它通过简单的API接口，使得开发者能够轻松创建动画、旋转和用户交互等效果。

采用伪3D的方法，`Zdog` 强调了易用性和性能，适用于快速原型设计和不需要复杂三维渲染的项目。其轻便的体积和无依赖性，使得它成为Web开发中快速集成引人注目的三维效果的理想选择。`Zdog` 的灵活性和可扩展性让开发者能够在不深入复杂数学和图形学原理的情况下，轻松实现有趣的三维交互体验。

# 安装 Zdog

将 Zdog 引入项目，可以通过 CDN，在你的 HTML 中加入：

```html
<script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js"></script>
```
或者使用包管理工具 npm 或 yarn 
```shell
npm install zdog
# 或
yarn add zdog
```

# 如何使用 Zdog

下面使用 CDN 方式引入，绘制一个圆环沿着垂直方向旋转。

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZDog 入门</title>
</head>
<body>
  <canvas class="zdog-canvas" width="240" height="240"></canvas>
  <!-- 引入 Zdog -->
  <script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js"></script>
  <!-- js 文件 -->
  <script src="zdog-demo.js"></script>
</body>
<style>
  .zdog-canvas {
    background: #FDB;
  }
</style>
</html>
```
我们创建 canvas 画布承载内容，给画布一个宽高然后修改背景色，为了更美观些。下面使用 Zdog 创建 3D 图形。

```js
// 创建场景容器，所有的内容放在里面
let illo = new Zdog.Illustration({
  element: '.zdog-canvas'
})

// 添加圆形，
new Zdog.Ellipse({
  addTo: illo, // 添加到容器中
  diameter: 80, // 形状大小
  stroke: 20,
  color: '#636'
})

// 更新 & 渲染
illo.updateRenderGraph()
```
首先，使用 `Illustration` 类创建了一个容器，它是处理 `canvas` 和 `svg` 元素的顶层类，保存场景中的所有形状，并在元素中显示出来。`Ellipse` 创建一个圆环，将它添加到容器中，设置尺寸和颜色。

插图


### 引入动画

上面在画布上绘制了一个圆，展现出来的效果就是一个二维的圆形。下面给这个圆形添加动画，让他展现出 3D 的效果。实现方法很简单：

```js
function animate() {
  // 旋转 illo 的每一帧
  illo.rotate.y += 0.03
  illo.updateRenderGraph()
  // 下一帧动画
  requestAnimationFrame(animate)
}
// 开始动画
animate()
```
上面通过 `requestAnimationFrame` 函数每次调用都使画布沿着 y 轴转动。

插图

### 交互

处理上面的自动旋转，也可以实现鼠标拖拽效果。只需为 illo 添加 `dragRotate: true` 属性即可。

```js
let isSpinning = true
let illo = new Zdog.Illustration({
  element: '.zdog-canvas'，
  dragRotate: true,
  onDragStart() {
    isSpinning = !isSpinning
  }
})
// 添加圆形

new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  stroke: 20,
  color: '#636'
})
// 动画
function animate() {
  if (isSpinning) {
    illo.rotate.y += 0.03
  }
  illo.updateRenderGraph()
  requestAnimationFrame(animate)
}
animate()
```
添加拖拽属性，同时添加控制状态标识，在拖拽的时候停止自动滚动。通过 `onDragStart` 函数控制标识的变化。效果如下：

插图


# 小结

Zdog 是一个强大而简单的 Javascript 3D 引擎库，适用于初学者和有经验的开发者。通过本文，你已经了解了如何开始使用 Zdog、基本概念以及创建简单场景的示例。在探索 Zdog 的过程中，你可能会发现它的灵活性和易用性是其引人注目的特点。通过调整形状的属性、使用动画和交互，你可以为你的项目添加独特的三维体验。

在使用 Zdog 时，建议你查阅官方文档（[Zdog Documentation](https://zzz.dog/)），其中包含详细的API参考和更多高级示例，帮助你更好地利用这个强大的工具。

更多

今天的分享就到这里，如果觉得对你有帮助，感谢点赞、分享、关注一波，你的认可是我创造的最大动力。

更多内容请关注公众号：猿镇，一个分享有趣前端知识的公众号。