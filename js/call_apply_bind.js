function invite(greeting1, greeting2) {
  console.log(greeting1 + this.name + ', ' + greeting2)
}
const user1 = {name: '张三'}
const user2 = {name: '李四'}

invite.call(user1, '你好', '欢迎来到猿镇！') // 你好张三, 欢迎来到猿镇！
invite.call(user2, '你好', '欢迎来到猿镇！') // 你好李四, 欢迎来到猿镇！


invite.apply(user1, ['你好', '欢迎来到猿镇！'])
invite.apply(user2, ['你好', '欢迎来到猿镇！'])


const user1Func = invite.bind(user1)
user1Func('你好', '欢迎来的猿镇！') // 你好张三, 欢迎来的猿镇！

const user2Func = invite.bind(user2, '你好', '欢迎来到猿镇！')
user2Func() // 你好李四, 欢迎来到猿镇！


// 应用

// 合并两个数组
const arr1 = [1,2,3]
const arr2 = [4,5,6]
Array.prototype.push.apply(arr1, arr2)
console.log(arr1) // [1,2,3,4,5,6]

//  获取数组的最大值和最小值
const arr3 = [1,2,3,4,5,6]
console.log('最大值：', Math.max.apply(Math, arr3)) // 6
console.log('最大值：', Math.max.call(Math, ...arr3)) //ES6: 6
console.log('最小值：', Math.min.apply(Math, arr3)) // 1
console.log('最小值：', Math.min.call(Math, ...arr3)) // ES6: 1


// 验证是否是数组
function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}
console.log('是否是数组：', isArray([1,2,4]))

// 封装方法
const toStr = Function.prototype.call.bind(Object.prototype.toString)

function isArray2(obj) {
  return toStr(obj) === '[object Array]'
}
console.log('是否是数组：', isArray2([1,2,3]))

console.log(toStr('123')) // [object String]
console.log(toStr(1)) // [object Number]
console.log(toStr({})) // [object Object]
console.log(toStr([])) // [object Array]
console.log(toStr(null)) // [object Null]
console.log(toStr(undefined)) // [object Undefined]