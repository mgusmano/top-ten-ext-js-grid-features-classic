Ext.define("TopTenExtJsGridFeaturesClassic.store.EmployeesStore", {
    extend: "Ext.data.Store",
    storeId: "EmployeesStore",
    model: "TopTenExtJsGridFeaturesClassic.model.EmployeeModel",
    data: Data.data,
    proxy: {
        type: "memory",
        reader: {
            type: "json",
        },
    },
    autoLoad: true
});
