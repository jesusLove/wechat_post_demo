import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressBook as fasAddressBook, faCamera as fasCamera } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook as farAddressBook } from '@fortawesome/free-regular-svg-icons'
library.add(
  fasAddressBook,
  farAddressBook,
  fasCamera
)

const install = (app) => {
  // 注册全局组件 FontAwesomeIcon
  app.component('font-awesome-icon', FontAwesomeIcon)
}

export default install
