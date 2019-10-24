import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router/router'
import { createStore } from './vuex/index'
import { sync } from 'vuex-router-sync'
export function createdApp() {
    const router = createRouter();
    const store = createStore();
    sync(store, router)
    const app = new Vue({
        router,
        store,
        render: h => h(App),
    })
    return { app, router, store }
}