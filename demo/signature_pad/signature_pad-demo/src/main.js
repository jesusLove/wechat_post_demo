import './style.css'
import SignaturePad from 'signature_pad'
import {download} from './utils'


document.querySelector('#app').innerHTML = `
<div id="signature-pad" class="signature-pad">
    <div class="signature-pad--body">
        <canvas id="signature-canvas"></canvas>
    </div>
    <div class="signature-pad--footer">
        <button type="button" class="buttonclear clear" id="clear" data-action="clear">重签</button>
        <button type="button" class="buttonclear clear" id="undo" data-action="undo">撤销</button>
        <button type="button" class="buttonclear clear" id="redo" data-action="redo">重做</button>
        <button type="button" class="buttonclear clear" id="savePNG" data-action="savePNG">保存PNG</button>
    </div>
</div>
`
const canvas = document.getElementById('signature-canvas')
const signaturePad = new SignaturePad(canvas, {
  backgroundColor: '#DEDEDE',
  penColor: 'rgb(0, 0, 0)',
})

// 清除
const cancelButton = document.getElementById('clear')
cancelButton.addEventListener('click', (event) => {
  signaturePad.clear()
})

// 保存图片 PNG
const savePNGButton = document.getElementById('savePNG')
savePNGButton.addEventListener('click', (event) => {
  if (signaturePad.isEmpty()) {
    alert("请先提供签名");
  } else {
    // PNG
    const imgStr = signaturePad.toDataURL()
    // const dataURL = signaturePad.toDataURL("image/jpeg");
    // const dataURL = signaturePad.toDataURL('image/svg+xml');
    // const dataURL = signaturePad.toDataURL('image/svg+xml', { includeBackgroundColor: true });
    download(imgStr, 'signature.png')
  }
})

// 撤回、取消撤销操作
const undoData = []
const undoButton = document.getElementById("undo");
undoButton.addEventListener("click", () => {
  const data = signaturePad.toData();

  if (data && data.length > 0) {
    // remove the last dot or line
    const removed = data.pop();
    undoData.push(removed);
    signaturePad.fromData(data);
  }
});
const redoButton = document.getElementById("redo");
redoButton.addEventListener("click", () => {
  if (undoData.length > 0) {
    const data = signaturePad.toData();
    data.push(undoData.pop());
    signaturePad.fromData(data);
  }
});

