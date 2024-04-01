// 定义名为 createAnimate 的函数，用于创建并启动一个渐变动画。
function createAnimate() {
  new Granim({
    element: '#canvas-complex',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
      'default-state': {
        // 定义该状态下的渐变颜色对。
        // gradients 数组中的每个子数组代表一个渐变，包含多个颜色对象。
        // 每个颜色对象包含 'color' 和 'pos' 属性，分别代表颜色值和该颜色在渐变中的位置（位置从 0 到 1）。
        gradients: [
          [
            { color: '#833ab4', pos: 0.2 },  // 颜色 #833ab4 位于渐变的 20% 位置
            { color: '#fd1d1d', pos: 0.8 },  // 颜色 #fd1d1d 位于渐变的 80% 位置
            { color: '#38ef7d', pos: 1 }   // 颜色 #38ef7d 位于渐变的 100% 位置
          ],
          [
            { color: '#40e0d0', pos: 0 },    // 颜色 #40e0d0 位于渐变的 0% 位置
            { color: '#ff8c00', pos: 0.2 },  // 颜色 #ff8c00 位于渐变的 20% 位置
            { color: '#ff0080', pos: 0.75 }  // 颜色 #ff0080 位于渐变的 75% 位置
          ],
        ],
      },
    },
  })
}
createAnimate()