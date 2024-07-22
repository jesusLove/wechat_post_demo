
import './style.css'
import 'timetable.js/dist/styles/timetablejs.css'
import Timetable from 'timetable.js'

document.querySelector('#app').innerHTML = `
  <div class="timetable"></div>
`
const timetable = new Timetable()

// 设置时间范围 8 - 18
timetable.setScope(8, 18)

// 添加地点，作为课程表的列
timetable.addLocations(['周一', '周二', '周三', '周四', '周五'])
console.log('---', timetable)


timetable.addEvent('生物', '周一', new Date(2024, 6, 21, 8), new Date(2024, 6, 21, 10));

timetable.addEvent('数学', '周三', new Date(2024, 6, 21, 13), new Date(2024, 6, 21, 15));

timetable.addEvent('化学', '周五', new Date(2024, 6, 21, 10), new Date(2024, 6, 21, 12));

// 渲染课程表
const renderer = new Timetable.Renderer(timetable)
renderer.draw('.timetable')
