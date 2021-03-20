import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: "/",
            redirect: "/home/Discovermusic/Personalrecommendation"
        },
        {
            path: "/:catchAll(.*)",
            name: '404',
            component: () => import('../view/404.vue')
        },
        {
            path: '/home',
            component: () => import('../view/home.vue'),
            name: 'home',
            children: [
                {
                    label: '发现音乐',
                    path: '/home/Discovermusic',
                    component: () => import('../components/Discovermusic/Discovermusic.vue'),
                    name: 'Discovermusic',
                    children: [
                        {
                            label: '个性推荐',
                            path: '/home/Discovermusic/Personalrecommendation',
                            component: () => import('../components/Discovermusic/Personalrecommendation.vue'),
                            name: 'Personalrecommendation',
                        },
                        {
                            label: '歌单',
                            path: '/home/Discovermusic/songList',
                            component: () => import('../components/Discovermusic/songList.vue'),
                            name: 'songList',
                        },
                        {
                            label: '主播电台',
                            path: '/home/Discovermusic/Anchorstation',
                            component: () => import('../components/Discovermusic/Anchorstation.vue'),
                            name: 'Anchorstation',
                        },
                        {
                            label: '排行榜',
                            path: '/home/Discovermusic/Leaderboard',
                            component: () => import('../components/Discovermusic/Leaderboard.vue'),
                            name: 'Leaderboard',
                        },
                        {
                            label: '歌手',
                            path: '/home/Discovermusic/singer',
                            component: () => import('../components/Discovermusic/singer.vue'),
                            name: 'singer',
                        },
                        {
                            label: '最新音乐',
                            path: '/home/Discovermusic/Latestmusic',
                            component: () => import('../components/Discovermusic/Latestmusic.vue'),
                            name: 'Latestmusic',
                        },
                        
                    ]
                },
            ]
        }
    ]
})
export default router