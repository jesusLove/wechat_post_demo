function createAnimate() {
  // 创建一个新的 Granim.js 实例。
  new Granim({
    // 指定渐变动画将要应用的 DOM 元素。
    // 这里使用ID选择器 '#canvas-basic'，意味着渐变动画将应用在 ID 为 'canvas-basic' 的元素上。
    element: '#canvas-basic',

    // 设置渐变动画的方向。
    // 'left-right' 表示渐变将从左到右进行。
    direction: 'left-right',

    // 配置当元素不在视口中时，渐变动画是否暂停。
    // isPausedWhenNotInView 设置为 true 表示当动画元素不在浏览器视口中时，动画将暂停。
    isPausedWhenNotInView: true,

    // 定义渐变动画的状态。
    // 这里定义了一个名为 "default-state" 的状态。
    states: {
      'default-state': {
        // 定义该状态下的渐变颜色对。
        // gradients 数组中的每个子数组代表一个渐变，包含两个颜色值，分别代表渐变的起始颜色和结束颜色。
        gradients: [
          ['#ff9966', '#ff5e62'], // 渐变 1: 从 #ff9966 到 #ff5e62
          ['#00F260', '#0575E6'], // 渐变 2: 从 #00F260 到 #0575E6
          ['#e1eec3', '#f05053'], // 渐变 3: 从 #e1eec3 到 #f05053
        ],
      },
    },
  })
}

createAnimate()
