import Mock from 'mockjs'
import axios from 'axios'

// 定义模拟数据
Mock.mock('/api/user', 'get', {
  code: 200,
  data: {
    id: '@id',
    name: '@name',
    age: '@integer(20, 50)'
  }
})

// 发生网络请求
axios.get('/api/user').then(res => {
  console.log(res.data)
})