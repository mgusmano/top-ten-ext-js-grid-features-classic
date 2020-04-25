Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.CountrySalesGridView", {
    extend: "Ext.grid.Panel",
    xtype: 'CountrySalesGridView',
    title: "Country Sales Grid",
    store: "CountrySalesStore",

    bufferedRenderer: true,

    columns: [
        {
            text: "Id",
            dataIndex: "id",
        },
        {
            text: "Company",
            dataIndex: "company",
        },
        {
            text: "Country",
            width: 150,
            dataIndex: "country",
        },
        {
            text: "Date",
            width: 300,
            dataIndex: "date",
        },
        {
            text: "Value",
            dataIndex: "value",
        },
        {
            text: "Quantity",
            dataIndex: "quantity",
        },
        {
            text: "Year",
            dataIndex: "year",
        },
        {
            text: "Continent",
            flex: 1,
            dataIndex: "continent",
        },
    ],
});
