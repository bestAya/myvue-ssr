import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld"
import Home from "../components/Home"
Vue.use(Router);

export function createRouter() {
    const router = new Router({
        mode: 'history',
        routes: [
            { path: '/', component: Home },
            { path: '/counter', component: HelloWorld },
        ]
    })
    return router;
}