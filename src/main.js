import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'//引入element-ui
import 'element-plus/lib/theme-chalk/index.css'
import './assets/icon/iconfont'
import './assets/icon/iconfont.css'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

