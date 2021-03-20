import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: '/home',
            component: () => import('../view/home.vue'),//按需加载路由
            name: 'home',
            meta: {
                index: 1
            }
        }
    ]
})
export default router