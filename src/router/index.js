import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Stocks from '../views/Stocks.vue'
import Portfolio from '../views/Portfolio.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/stocks',
        name: 'stocks',
        component: Stocks
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
