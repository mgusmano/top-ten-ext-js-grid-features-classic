Ext.define("TopTenExtJsGridFeaturesClassic.store.ForumThreadsStore", {
    extend: "Ext.data.BufferedStore",
    //model: 'TopTenExtJsGridFeaturesClassic.model.ForumThreadModel',

    pageSize: 75,
    leadingBufferZone: 300,

    remoteFilter: true,
    autoLoad: true,
    cors: true,

    //   data: { items: [
    //     { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", dept: "bridge" },
    //     { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", dept: "security" },
    //     { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", dept: "medical" },
    //     { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", dept: "bridge" }
    // ]},
    // proxy: {
    //     type: 'memory',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'items'
    //     }
    // }

    proxy: {
        type: "jsonp",
        noCache: false,
        cors: true,
        //url: 'http://localhost',
        url: "http://www.sencha.com/forum/remote_topics/index.php",
        reader: {
            rootProperty: "topics",
            totalProperty: "totalCount",
        },
        simpleSortMode: true,
        filterParam: "query",
    },
});
