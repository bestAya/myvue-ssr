export
default class indexModel {
    constructor(ctx) {}
    getData() {
        const _promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{
                        userId: 1,
                        id: 1,
                        title: "石家庄",
                        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
                    }, {
                        userId: 1,
                        id: 2,
                        title: "郑州",
                        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
                    }]
                );
            }, 1000);
        });
        return _promise;
    }
}