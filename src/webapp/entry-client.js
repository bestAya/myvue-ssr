import { createdApp } from './main'
const { app, router } = createdApp;
router.onReady(() => {
    app.$mount('#app')
})