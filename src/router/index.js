import Vue from 'vue'
import VueRouter from 'vue-router'
import Threads from "@/views/thread/Threads";
import Register from "@/views/auth/Register";
import Login from "@/views/auth/Login";
import SingleThread from "@/views/thread/SingleThread";
import CreateThread from "@/views/thread/CreateThread";

Vue.use(VueRouter)

const routes = [
    {
        path: '/Threads',
        name: 'Threads',
        component: Threads
    },
    {
        path: '/create/thread',
        name: 'createThread',
        component: CreateThread
    },
    {
        path: '/singleThread',
        name: 'singleThread',
        component: SingleThread
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
