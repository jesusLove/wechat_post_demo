const $ = e => document.querySelector(e)


// 轻击事件
const tapManager = new Hammer.Manager($('#tap'))
const tap = new Hammer.Tap({
  taps: 1
})
tapManager.add(tap)

tapManager.on('tap', (e) => {
  e.target.classList.toggle('expand');
});

// 双击事件
const doubleTapManager = new Hammer.Manager($('#doubleTap'))
const doubleTap = new Hammer.Tap({
  taps: 2,
  event: 'doubletap'
})
doubleTapManager.add(doubleTap)

doubleTapManager.on('doubletap', (e) => {
  e.target.classList.toggle('expand');
});

// 长按事件
const pressManager = new Hammer.Manager($('#press'));
const Press = new Hammer.Press({
  time: 500
});
pressManager.add(Press);
pressManager.on('press', function(e) {
  e.target.classList.toggle('expand');
});

// 滑动事件

const swipeManager = new Hammer.Manager($('#swipe'));
const Swipe = new Hammer.Swipe();
swipeManager.add(Swipe)

let deltaX = 0;
let deltaY = 0;
swipeManager.on('swipe', function(e) {
  deltaX = deltaX + e.deltaX;
  const direction = e.offsetDirection;
  const translate3d = 'translate3d(' + deltaX + 'px, 0, 0)';
  
  if (direction === 4 || direction === 2) {
    e.target.innerText = deltaX;
    e.target.style.transform = translate3d;
  }
});
