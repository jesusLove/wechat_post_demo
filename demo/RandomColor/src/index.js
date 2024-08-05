import randomColor from 'randomcolor'

// 公共方法
const appendEl = (color) => {
  console.log('color: ', color)
  const app = document.getElementById('app')
  const createEl = color => {
    const div = document.createElement('div')
    div.className = 'box'
    div.style.backgroundColor = color
    return div
  }
  const el = createEl(color)
  app.appendChild(el)
}

const color = randomColor() // 创建十六进制颜色 #436cb2
appendEl(color)
appendEl(randomColor())
appendEl(randomColor())
appendEl(randomColor())

// 指定颜色的主调
appendEl(randomColor({hue: 'green'}))
appendEl(randomColor({hue: 'green'}))
appendEl(randomColor({hue: 'green'}))
appendEl(randomColor({hue: 'green'}))

appendEl(randomColor({hue: 'orange'}))
appendEl(randomColor({hue: 'orange'}))
appendEl(randomColor({hue: 'orange'}))
appendEl(randomColor({hue: 'orange'}))

// 颜色的亮度
appendEl(randomColor({hue: 'orange', luminosity: 'bright'}))
appendEl(randomColor({hue: 'orange', luminosity: 'bright'}))
appendEl(randomColor({hue: 'orange', luminosity: 'bright'}))
appendEl(randomColor({hue: 'orange', luminosity: 'bright'}))

appendEl(randomColor({hue: 'orange', luminosity: 'light'}))
appendEl(randomColor({hue: 'orange', luminosity: 'light'}))
appendEl(randomColor({hue: 'orange', luminosity: 'light'}))
appendEl(randomColor({hue: 'orange', luminosity: 'light'}))

appendEl(randomColor({hue: 'orange', luminosity: 'dark'}))
appendEl(randomColor({hue: 'orange', luminosity: 'dark'}))
appendEl(randomColor({hue: 'orange', luminosity: 'dark'}))
appendEl(randomColor({hue: 'orange', luminosity: 'dark'}))

const colors = randomColor({count: 2})
console.log(colors) //  ['#ce831a', '#f9e5b1']
