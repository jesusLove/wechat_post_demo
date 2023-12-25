let isSpinning = true
let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
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


// square
new Zdog.Rect({
  addTo: illo,
  width: 80,
  height: 80,
  // position further back
  translate: { z: -40 },
  stroke: 12,
  color: '#E62',
  fill: true,
});


function animate() {
  if (isSpinning) {
    illo.rotate.y += 0.03
  }
  illo.updateRenderGraph()
  requestAnimationFrame(animate)
}
animate()