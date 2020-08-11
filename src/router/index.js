import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Trade from '../views/Trade.vue'
import Portfolio from '../views/Portfolio.vue'

import MainLayout from '../views/layouts/Main.vue'
import DummyLayout from '../views/layouts/Dummy.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default: Home,
            layout: DummyLayout
        }
    },
    {
        path: '/trade',
        name: 'trade',
        components: {
            default: Trade,
            layout: MainLayout
        }
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        components: {
            default: Portfolio,
            layout: MainLayout
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
