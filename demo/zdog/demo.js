// 创建场景容器，所有的内容放在里面
let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true, // 是否可以拖动
})

// 添加圆形，
new Zdog.Ellipse({
  addTo: illo, // 添加到容器中
  diameter: 80, // 形状大小
  stroke: 20,
  color: '#636'
})

function animate() {
  // 旋转 illo 的每一帧
  illo.rotate.y += 0.03
  illo.updateRenderGraph()
  // 下一帧动画
  requestAnimationFrame(animate)
}
// 开始动画
animate()