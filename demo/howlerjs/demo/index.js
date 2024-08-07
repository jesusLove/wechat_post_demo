// 创建一个新的Howler对象，用于音频播放
const sound = new Howl({
  // 设置音频文件的路径，支持两种格式：webm和mp3
  src: ['./audio/' + fileName + '.webm', './audio/' + fileName + '.mp3'],
  // 强制使用HTML5音频，以便能够流式传输音频（对于大文件是更好的选择）
  html5: true,
  // 当音频开始播放时触发的回调函数
  onplay: function() {
  },
  // 当音频加载完成时触发的回调函数
  onload: function() {
  },
  // 当音频播放结束时触发的回调函数
  onend: function() {
  },
  // 当音频暂停时触发的回调函数
  onpause: function() {
  },
  // 当音频停止时触发的回调函数
  onstop: function() {
  },
  // 当音频跳转到新位置时触发的回调函数
  onseek: function() {
  }
});