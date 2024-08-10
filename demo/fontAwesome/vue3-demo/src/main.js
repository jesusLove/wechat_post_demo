import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import installFontAwesomeIcon from './plugins/fontawesome'

const app = createApp(App)

installFontAwesomeIcon(app)

app.mount('#app')