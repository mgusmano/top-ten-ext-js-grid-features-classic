Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.SalespersonSalesView", {
    extend: "Ext.grid.Panel",
    xtype: 'SalespersonSalesView',
    title: "Salesperson Sales Grid",
    requires: ["TopTenExtJsGridFeaturesClassic.store.SalespersonSalesStore"],
    store: { type: "SalespersonSalesStore" },
    //store: Ext.data.StoreManager.lookup('SalespersonSalesStore'),
    //store: Ext.create('TopTenExtJsGridFeaturesClassic.store.SalespersonSalesStore',{}),

    columns: [
        {
            text: "Orderid",
            dataIndex: "orderid",
        },
        {
            text: "Salesperson",
            width: 125,
            dataIndex: "salesperson",
        },
        {
            text: "Amount",
            dataIndex: "amount",
        },
        {
            text: "Country",
            width: 125,
            dataIndex: "country",
        },
        {
            text: "Orderdate",
            width: 300,
            dataIndex: "orderdate",
        },

        {
            text: "Person - range",
            width: 150,
            dataIndex: "person-range",
        },
        {
            text: "Year",
            flex: 1,
            dataIndex: "year",
        },
    ],
});
