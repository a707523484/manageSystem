import Vue from 'vue';
import VueRouter from 'vue-router';

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const includPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return includPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

import Home from './view/Home.vue'
import Mall from './components/Mall.vue'
import User from './components/User.vue'
import Page1 from './components/page1.vue'
import Page2 from './components/page2.vue'
import login from './components/login.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/mall', component: Mall },
    { path: '/user', component: User },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    {
        path: '/login', components: {
            router_login: login
        }
    }
]

const router = new VueRouter({
    routes
})

export default router