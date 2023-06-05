import Vue from 'vue'
import VueRouter from 'vue-router'
import ye1 from '@/components/ye1.vue'
import ye2 from '@/components/ye2.vue'
import ye3 from '@/components/ye3.vue'
import ye4 from '@/components/ye4.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => (import("../views/Home/Home.vue")),
        meta: {
            title: "主页"
        }
    },
    {
        path: '/keyboard',
        name: 'keyboard',
        component: () => (import("@/views/keyboard/keyboard.vue")),
        meta: {
            title: "keyboard"
        },
    },
    {
        path: '/DingTalk',
        name: 'DingTalk',
        component: () => (import("@/views/DingTalk/DingTalk.vue")),
        meta: {
            title: "DingTalk"
        },
    },
    {
        path: '/MyInfo',
        name: 'MyInfo',
        component: () => (import("@/views/MyInfo/MyInfo.vue")),
        meta: {
            title: "MyInfo"
        },
        children: [
            {
                path: '/ye1',
                component: ye1,
                meta: {
                    title: "个人简历"
                },
            },
            {
                path: '/ye2',
                component: ye2,
                meta: {
                    title: "工作经验"
                },
            },
            {
                path: '/ye3',
                component: ye3,
                meta: {
                    title: "数据图表"
                },
            },
            {
                path: '/ye4',
                component: ye4,
                meta: {
                    title: "上传图片"
                },
            }
        ]
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => (import("@/views/Login/Login.vue")),
        meta: {
            title: "登录"
        },

    },
    {
        path: '/download',
        name: 'download',
        component: () => (import("@/views/download/download.vue")),
        meta: {
            title: "下载"
        },

    },
]

const router = new VueRouter({
    routes
})

export default router
