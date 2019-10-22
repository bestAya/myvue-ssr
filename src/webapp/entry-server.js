import { createdApp } from './main'
export default context => {
    return new Promise((resolve, reject) => {
        const { app, router, store } = createdApp();
        router.push(context.url);
        router.onReady(() => {
            const matchComponent = router.getMatchedComponents();
            Promise.all(matchComponent.map(component => {
                    console.log(component);
                    if (component.asyncData) {
                        return component.asyncData({ store })
                    }

                }))
                .then(() => {
                    context.state = store.state;
                })
                .catch(reject)
        }, reject)
    })
}