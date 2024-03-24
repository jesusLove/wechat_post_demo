import blurify from "./lib/blurify.es.js";

blurify({
  images: document.getElementsByClassName('img1'),
  blur: 6,
  mode: 'auto' 
})

blurify({
  images: document.getElementsByClassName('img2'),
  blur: 6,
  mode: 'css'
})


