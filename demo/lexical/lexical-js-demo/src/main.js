import './style.css'
import { createEditor } from 'lexical'
import { registerRichText } from '@lexical/rich-text'
import { mergeRegister } from '@lexical/utils'

// 定义编辑的 DOM 结构
document.querySelector('#app').innerHTML = `
  <div class="wrapper">
    <h1>Lexical Basic JS Demo</h1>
    <div class="editor-wrapper">
      <div id="lexical-editor" contenteditable></div>
    </div>
    <h4>Editor state:</h4>
    <textarea id="lexical-state"></textarea>
  </div>
`
const editorRef = document.getElementById('lexical-editor')
const stateRef = document.getElementById('lexical-state')

const initConfig = {
  namespace: 'JS DEMO',
}
const editor = createEditor(initConfig)
editor.setRootElement(editorRef)

mergeRegister(registerRichText(editor))

editor.registerUpdateListener(({ editorState }) => {
  stateRef.value = JSON.stringify(editorState.toJSON(), undefined, 2)
})
