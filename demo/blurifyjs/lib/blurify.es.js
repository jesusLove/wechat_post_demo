// preload函数用于预加载图片
function preload(images) {
  // 创建一个数组来存储Image对象
  var imageNodes = [];
  // 计数器，用于跟踪加载完成的图片数量
  var count = 0;
  // 完成加载后的回调函数
  var doneAction = function (images) { };

  // 确保传入的是一个数组，如果不是，则将其包装在一个数组中
  images = (typeof images != 'object') ? [images] : images;

  // 如果没有图片需要加载，则直接调用完成回调
  images.length === 0 && doneAction(imageNodes);

  // 遍历图片数组，创建Image对象并设置它们的src属性
  images.map(function (image) {
      var _image = new Image();
      _image.crossOrigin = '*'; // 设置跨域权限
      _image.src = image.dataset ? image.dataset.src : image.getAttribute('data-src');
      // 当图片加载完成或出错时调用imageLoad函数
      _image.onload = _image.onerror = imageLoad;
      imageNodes.push(_image);
  });

  // imageLoad函数，当图片加载完成时调用
  function imageLoad() {
      count++; // 增加计数器
      if (count == images.length) // 如果所有图片都加载完成
          doneAction(imageNodes); // 调用完成回调
  }

  // 返回一个对象，包含一个done方法，用于设置完成回调
  return {
      done: function (cb) {
          doneAction = arguments[0] || doneAction;
      },
  };
}

// cssSupport函数用于检测浏览器是否支持特定的CSS属性
function cssSupport(key, value) {
  var element = document.createElement('div');
  // 如果只传入一个参数，返回该属性是否存在于元素的style中
  if (arguments.length == 1)
      return key in element.style ? true : false;
  // 如果传入两个参数，尝试设置该属性，并检查是否成功
  else if (arguments.length == 2) {
      element.style[key] = value;
      return element.style[key] ? true : false;
  }
  // 如果传入的参数数量不是1或2，返回false
  else
      return false;
}

// blurify构造函数用于创建一个实例，该实例可以对图片进行模糊处理
function blurify(options) {
  // 设置默认参数
  if (options === void 0) { options = { blur: 6, mode: 'auto', images: [] }; }
  // 如果不是以实例方式调用，返回一个新的blurify实例
  if (!(this instanceof blurify))
      return new blurify(options);

  // 解析传入的参数
  if (typeof options === 'number') {
      options = { blur: options, images: arguments[1], mode: 'auto' };
  }
  // 设置实例的选项
  this.options = options;
  // 设置模糊半径
  this.blur = options.blur || 6;
  // 设置模糊模式，默认为'css'
  this.mode = options.mode || 'css';
  // 存储传入的图片元素
  // @ts-ignore
  this.$els = options.images.nodeType == 1 ? [options.images] : [].slice.call(options.images);

  // 根据模式设置模糊效果
  if (this.mode == 'auto') {
      // 检测浏览器是否支持CSS模糊效果
      cssSupport('filter', 'blur(1px)') ? this.useCSSMode() : this.useCanvasMode();
  }
  // 如果明确设置为CSS模式
  else if (this.mode == 'css') {
      this.blur = this.blur / 2; // CSS模糊效果需要的值通常是一半
      this.useCSSMode();
  }
  // 如果设置为Canvas模式或其他模式
  else {
      this.useCanvasMode();
  }
}
// useCSSMode方法用于使用CSS方式实现模糊效果
blurify.prototype.useCSSMode = function () {
  var _this = this;
  // 遍历图片元素，设置其src属性，并添加CSS模糊效果
  this.$els.map(function (el) {
      el.src = el.dataset ? el.dataset.src : el.getAttribute('data-src');
      el.style['filter'] = el.style['-webkit-filter'] = "blur(" + _this.blur + "px)";
  });
};

// useCanvasMode方法用于使用Canvas方式实现模糊效果
blurify.prototype.useCanvasMode = function () {
  var _this = this;
  // 检测图片类型，默认为'image/jpeg'
  this.imageType = this.options.imageType || "image/jpeg";
  // 预加载图片
  preload(this.$els).done(function (images) {
      // 遍历加载完成的图片，设置图片的src为经过模糊处理的数据URL
      images.map(function (image, index) {
          _this.$els[index].src = _this.getDataURL(image);
      });
  });
};
// blurify方法用于在Canvas上实现模糊效果
blurify.prototype.blurify = function (canvas, blur) {
  var ctx = canvas.getContext('2d');
  // 设置全局Alpha值，用于控制模糊的强度
  ctx.globalAlpha = 1 / (2 * +blur);
  // 通过在Canvas上多次绘制带有偏移的图像来实现模糊效果
  for (var y = -blur; y <= blur; y += 2) {
      for (var x = -blur; x <= blur; x += 2) {
          ctx.drawImage(canvas, x, y);
          if (x >= 0 && y >= 0)
              ctx.drawImage(canvas, -(x - 1), -(y - 1));
      }
  }
  // 重置全局Alpha值
  ctx.globalAlpha = 1;
};
// getDataURL方法用于获取经过模糊处理的图片的数据URL
blurify.prototype.getDataURL = function (image) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  // 设置Canvas的尺寸与图片相同
  canvas.width = image.width;
  canvas.height = image.height;
  // 将图片绘制到Canvas上
  ctx.drawImage(image, 0, 0);
  // 对Canvas应用模糊效果
  this.blurify(canvas, this.blur);
  // 将Canvas转换为数据URL
  return canvas.toDataURL(this.imageType);
};

// 导出blurify函数，以便在其他模块中使用
export default blurify;

