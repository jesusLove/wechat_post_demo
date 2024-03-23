import mergeImages from './lib/merge-images.js'

mergeImages([
  './images/body.png',
  './images/eyes.png',
  './images/mouth.png',
]).then((b64) => (document.getElementById('img').src = b64))

mergeImages([
  { src: './images/body.png', x: 0, y: 0 },
  { src: './images/eyes.png', x: 32, y: 0 },
  { src: './images/mouth.png', x: 16, y: 0 },
]).then((b64) => (document.getElementById('img2').src = b64))

mergeImages([
  { src: './images/body.png'},
  { src: './images/eyes.png'},
  { src: './images/mouth.png', opacity: 0.5},
]).then((b64) => (document.getElementById('img3').src = b64))
