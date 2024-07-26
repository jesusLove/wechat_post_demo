import './style.css'

import * as RoosterJS from 'roosterjs'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="action-wrapper">
      <button id="buttonB">B</button> 
      <button id="buttonI">I</button>
      <button id="buttonU">U</button>
    </div>
    <div style="width: 100%; height: 400px; border: solid 1px black" id="editor"></div>
  </div>
`
const editorEl = document.getElementById('editor')
const editor = RoosterJS.createEditor(editorEl)

document.getElementById('buttonB').addEventListener('click', () => {
  RoosterJS.toggleBold(editor)
})
document.getElementById('buttonI').addEventListener('click', () => {
  RoosterJS.toggleItalic(editor)
})
document.getElementById('buttonU').addEventListener('click', () => {
  RoosterJS.toggleUnderline(editor)
})

