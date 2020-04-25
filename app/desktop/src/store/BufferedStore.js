Ext.define("TopTenExtJsGridFeaturesClassic.store.BufferedStore", {
    extend: "Ext.data.BufferedStore",
    storeId: "BufferedStore",
    alias: "store.BufferedStore",
    fields: [
        "firstName",
        "lastName",
        "address",
        "company",
        "title",
        { name: "id", type: "int" },
    ],
    pageSize: 20,
    leadingBufferZone: 0,
    trailingBufferZone: 0,
    autoLoad: true,
    proxy: {
        type: "ajax",
        url:
            "https://llbzr8dkzl.execute-api.us-east-1.amazonaws.com/production/user",
        reader: {
            rootProperty: "users",
            totalProperty: "totalCount",
        },
    },
});
