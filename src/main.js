import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'//引入element-ui
import 'element-plus/lib/theme-chalk/index.css'
import './assets/icon/iconfont'
import './assets/icon/iconfont.css'
// Create a new store instance.
const store = createStore({
    state() {
        return {
            user: {}
        }
    },
    getters: {
        //用户名
        getuserName(state) {
            return state.user.profile?.nickname ? state.user.profile.nickname : '';
        },
        //用户头像
        getuserImg(state) {
            return state.user.profile?.avatarUrl ? state.user.profile.avatarUrl : 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';
        }
    },
    mutations: {
        //登录
        setUser(state, val) {
            state.user = val
            console.log(state);
        },
        //登出
        signOut(state) {
            state.user = {}
        }
    }
})
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

