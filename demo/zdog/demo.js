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
  illo.updateRenderGraph()
  requestAnimationFrame(animate)
}
animate()