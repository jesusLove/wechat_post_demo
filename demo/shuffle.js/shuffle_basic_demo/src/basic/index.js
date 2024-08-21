import './index.css'
import { images } from './data'
import Shuffle from 'shufflejs'

const ratio = (variant) => {
  if (variant == 'col-span') return '32x9'
  if (variant == 'row-span') return '9x80'
  return '16x9'
}

// 根据图片对象生成tile的HTML字符串
const tile = (obj) => {
  return `
  <figure class="js-item column ${obj.variant || ''}">
      <div class="aspect aspect--${ratio(obj.variant)}">
          <div class="aspect__inner">
              <img src="${obj.src}" alt="${obj.alt}">
          </div>
      </div>
  </figure>`
}
// 获取页面元素并设置其内部HTML为生成的Shuffle布局
document.querySelector('#page').innerHTML = `
  <div class="container">
    <h1>
        <a href="https://vestride.github.io/Shuffle/" target="_blank" rel="noopener">Shuffle</a>模板
    </h1>
    <div class="js-grid my-shuffle">${images
      .map((item) => tile(item))
      .join('')}</div>
  </div>
`
// 创建Shuffle实例并配置选项
const shuffle = new Shuffle(document.querySelector('.my-shuffle'), {
  itemSelector: '.js-item',
  sizer: '.js-sizer',
  buffer: 1,
})
