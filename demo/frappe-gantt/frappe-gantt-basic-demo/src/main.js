import './style.css'
import 'frappe-gantt/dist/frappe-gantt.css'
import Gantt from 'frappe-gantt'
import moment from 'moment'

document.querySelector('#app').innerHTML = `
  <div class="gantt-target">
    <svg id="gantt"></svg>
  </div>
`

const tasks = [
  {
    id: '任务一', // 任务的唯一标识符
    name: '搜索资料', // 任务的名称
    start: '2024-07-21', // 任务的开始日期
    end: '2024-07-23', // 任务的结束日期
    progress: 40, // 任务的完成进度，以百分比表示
  },
  {
    id: '任务二',
    name: '文章写作',
    start: '2024-07-23',
    end: '2024-07-25',
    progress: 30,
    dependencies: '任务一', // 表示任务二依赖于任务一的完成
  },
  {
    id: '任务三',
    name: '排版发表',
    start: '2024-07-26',
    end: '2024-07-28',
    progress: 10,
    dependencies: '任务二', // 表示任务三依赖于任务二的完成
  },
]

const gantt = new Gantt('#gantt', tasks, {
  header_height: 50,
  column_width: 30,
  step: 24,
  view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
  bar_height: 20,
  bar_corner_radius: 3,
  arrow_curve: 5,
  padding: 18,
  view_mode: 'Day',
  date_format: 'YYYY-MM-DD',
  language: 'zh', // or 'es', 'it', 'ru', 'ptBr', 'fr', 'tr', 'zh', 'de', 'hu'
  on_click: (task) => {
    console.log('Click', task)
  },
  on_date_change: (task, start, end) => {
    console.log('Date Change', task, start, end)
  },
  on_progress_change: (task, progress) => {
    console.log('Progress Change', task, progress)
  },
  on_view_change: (mode) => {
    console.log('View Change', mode)
  },
  // custom_popup_html选项用于自定义任务的弹出窗口内容
  custom_popup_html:  (task) => {
    console.log('taks', task)
    // task参数是一个任务对象，包含任务的详细信息
    // 这里使用moment.js库的format方法来格式化日期

    // 获取任务的结束日期，并格式化为月和日
    const end_date = moment(task._end).format('MM月DD日')

    // 返回一个HTML字符串，定义弹出窗口的内容
    return `
        <div class="details-container">
          <h2>${task.name}</h2>
          <p>截止日期 ${end_date}</p>
          <p>完成进度 ${task.progress}% </p>
        </div>
      `
  },
})
// 切换模式
// gantt.change_view_mode('Week')

const newTask = [
  {
    id: '任务四',
    name: '回复反馈',
    start: '2024-07-28',
    end: '2024-07-30',
    progress: 80,
    dependencies: '任务三',
  },
]

tasks.push(...newTask)

gantt.refresh(tasks)
