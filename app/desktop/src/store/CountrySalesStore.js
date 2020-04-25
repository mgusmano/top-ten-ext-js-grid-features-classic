Ext.define("TopTenExtJsGridFeaturesClassic.store.CountrySalesStore", {
    extend: "Ext.data.ArrayStore",
    storeId: "CountrySalesStore",

    autoLoad: true,
    proxy: {
        type: "ajax",
        url: "resources/data/countrySales.json",
        reader: {
            type: "json",
            rootProperty: "rows",
        },
    },
    fields: [
        { name: "id", type: "int" },
        { name: "company", type: "string" },
        { name: "country", type: "string" },
        { name: "date", type: "date", dateFormat: "d/m/Y" },
        { name: "value", type: "int" },
        { name: "quantity", type: "int" },
        {
            name: "year",
            convert: function (v, record) {
                return Ext.Date.format(record.get("date"), "Y");
            },
        },
        {
            name: "continent",
            convert: function (v, record) {
                if (
                    Ext.Array.indexOf(
                        ["Belgium", "Netherlands", "United Kingdom"],
                        record.get("country")
                    ) >= 0
                )
                    return "Europe";
                if (
                    Ext.Array.indexOf(
                        ["Canada", "United States"],
                        record.get("country")
                    ) >= 0
                )
                    return "North America";
                if (
                    Ext.Array.indexOf(["Australia"], record.get("country")) >= 0
                )
                    return "Australia";
            },
        },
    ],
});
