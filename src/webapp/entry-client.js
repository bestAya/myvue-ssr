import { createdApp } from './main.js'
const { app, router } = createdApp();
router.onReady(() => {
    app.$mount('#app')
})