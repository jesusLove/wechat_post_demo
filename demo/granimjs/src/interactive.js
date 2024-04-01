const granimInstance = new Granim({
  element: '#canvas-interactive',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  stateTransitionSpeed: 500,
  // 定义渐变动画的不同状态。
  states: {
    // 定义名为 'default-state' 的默认状态。
    'default-state': {
      // 定义该状态下的渐变颜色对。
      // gradients 数组中的每个子数组代表一个渐变，包含两个颜色值，分别代表渐变的起始颜色和结束颜色。
      gradients: [
        ['#B3FFAB', '#12FFF7'],  // 渐变 1: 从 #B3FFAB 到 #12FFF7
        ['#ADD100', '#7B920A'],  // 渐变 2: 从 #ADD100 到 #7B920A
        ['#1A2980', '#26D0CE'],  // 渐变 3: 从 #1A2980 到 #26D0CE
      ],

      // 设置渐变动画的过渡速度。
      // transitionSpeed 为 10000 毫秒，表示每个渐变动画的过渡将在 10 秒内完成。
      transitionSpeed: 10000,
    },

    // 定义名为 'violet-state' 的状态。
    'violet-state': {
      // 定义该状态下的渐变颜色对。
      gradients: [
        ['#9D50BB', '#6E48AA'],  // 渐变 1: 从 #9D50BB 到 #6E48AA
        ['#4776E6', '#8E54E9'],  // 渐变 2: 从 #4776E6 到 #8E54E9
      ],

      // 设置渐变动画的过渡速度。
      // transitionSpeed 为 2000 毫秒，表示每个渐变动画的过渡将在 2 秒内完成。
      transitionSpeed: 2000,
    },

    // 定义名为 'orange-state' 的状态。
    'orange-state': {
      // 定义该状态下的渐变颜色对。
      gradients: [['#FF4E50', '#F9D423']],  // 渐变 1: 从 #FF4E50 到 #F9D423

      // 设置渐变动画是否循环播放。
      // loop 设置为 false 表示渐变动画不会循环，而是在完成一次过渡后停止。
      loop: false,
    },
  },
})
// 绑定事件
document
  .getElementById('default')
  .addEventListener('click', () => {
    granimInstance.changeState('default-state')
  })
document
  .getElementById('violet')
  .addEventListener('click', () => {
    granimInstance.changeState('violet-state')
  })
document
  .getElementById('orange')
  .addEventListener('click', () => {
    granimInstance.changeState('orange-state')
  })