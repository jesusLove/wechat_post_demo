import Chance from 'chance'

const chance = new Chance()

console.log("生成随机 first 名字：", chance.first())
console.log("生成随机 last 名字：", chance.last())
console.log("生成随机 name 姓名：", chance.name())
console.log('随机 paragraph 段落：', chance.paragraph())
console.log('随机 age 年龄：', chance.age())
console.log('随机 Child 年龄：', chance.age({type: 'child'}))
console.log('随机 Teen 年龄：', chance.age({type: 'teen'}))
console.log('随机 Adult 年龄：', chance.age({type: 'adult'}))
console.log('随机 Senior 年龄：', chance.age({type: 'senior'}))

console.log('随机 Avatar 头像：', chance.avatar({protocol: 'https'}))
console.log('随机 Avatar 头像：', chance.avatar({fileExtension: 'jpg'}))
console.log('随机 Avatar 头像：', chance.avatar({email: 'mail@victorquinn.com'}))
console.log('随机 Avatar 头像：', chance.avatar({email: 'mail@victorquinn.com'}))


const chineseChars = () => {
  // 这里替换为中文字符的 Unicode 范围
  var chineseChars = 'abcdefghijklmnopqrstuvwxyz'; 
  for (var i = 0x4e00; i <= 0x9fa5; i++) {
      chineseChars += String.fromCharCode(i);
  }
  return chineseChars
}

console.log("中文", chance.string({pool: chineseChars()}))


// 准备中文词汇库
var nouns = ['苹果', '香蕉', '橙子']; // 名词
var verbs = ['吃', '喝', '玩']; // 动词
var adjectives = ['红的', '大的', '甜的']; // 形容词

// 定义一个函数来生成句子
function generateChineseSentence() {
    // 随机选择一个名词
    var noun = chance.pickone(nouns);
    // 随机选择一个形容词
    var adjective = chance.pickone(adjectives);
    // 随机选择一个动词
    var verb = chance.pickone(verbs);
    
    // 根据中文语法组合成一个简单的句子
    var sentence = adjective + ' ' + noun + ' ' + verb + '了';
    return sentence;
}

// 生成并打印一个中文句子
console.log(generateChineseSentence());