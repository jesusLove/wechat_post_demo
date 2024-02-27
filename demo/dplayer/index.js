const dp = new DPlayer({
  container: document.getElementById('dplayer'),
  screenshot: true,
  video: {
    url: './source/480P.mp4',
    pic: './picture/cover_img.jpg',  // 封面
    // thumbnails: '', // 缩略图
    type: 'auto',  // 类型
  }
})
