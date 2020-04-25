Ext.define("TopTenExtJsGridFeaturesClassic.store.UsersStore", {
    extend: "Ext.data.Store",
    storeId: "UsersStore",
    //model: 'TopTenExtJsGridFeaturesClassic.model.UserModel',
    // data: [
    // 	{ name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
    // 	{ name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
    // 	{ name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
    // 	{ name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
    // ]

    //   data: { items: [
    // 		{ name: 'Lisax', email: 'lisa@simpsons.com', phone: '555-111-1224' },
    // 		{ name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
    // 		{ name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
    // 		{ name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
    //   ]},
    // proxy: {
    //     type: 'memory',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'items'
    //     }
    // }

    autoLoad: true,
    proxy: {
        type: "ajax",
        url: "resources/data/Users.json",
        reader: {
            type: "json",
            rootProperty: "items",
        },
        limitParam: null,
        pageParam: null,
        startParam: null,
    },
});
