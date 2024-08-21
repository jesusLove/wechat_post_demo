import './style.css'
import Flicking from '@egjs/flicking'
import '@egjs/flicking/dist/flicking.css'

document.querySelector('#app').innerHTML = `
<div class="wrapper">
<!-- Viewport element -->
<div id="carousel" class="flicking-viewport">
  <!-- Camera element -->
  <div class="flicking-camera">
    <!-- Panels, class names are your choice -->
    <div class="panel">1</div>
    <div class="panel">2</div>
    <div class="panel">3</div>
    <div class="panel">4</div>
    <div class="panel">5</div>
  </div>
</div>
</div>
`

const flicking = new Flicking('#carousel', {
  align: 'center', 
  circular: true,
  bound: true,
  renderOnlyVisible: true,
})
