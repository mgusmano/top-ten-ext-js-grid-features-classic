Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.BasicGridView", {
    extend: "Ext.grid.Panel",
    xtype: 'BasicGridView',
    requires: ["TopTenExtJsGridFeaturesClassic.store.UsersStore"],
    title: "Basic Grid",
    store: Ext.create("TopTenExtJsGridFeaturesClassic.store.UsersStore", {}),

    // plugins: [
    // 	{
    // 			ptype: 'pivotexporter',
    // 			pluginId: 'exporter'
    // 	}
    // ],

    // header: {
    // 	itemPosition: 1, // after title before collapse tool
    // 	items: [
    // 			{
    // 					//ui: 'default-toolbar',
    // 					xtype: 'button',
    // 					text: 'Export to Excel',
    // 					handler: function(button) {
    // 							button.up('grid').saveDocumentAs({
    // 									title:      'Pivot grid export demo',
    // 									fileName:   'excelExport.xls'
    // 							});
    // 					}
    // 			}
    // 	]
    // },

    columns: [
        {
            text: "Name",
            width: 100,
            sortable: false,
            hideable: false,
            dataIndex: "name",
        },
        {
            text: "Email Address",
            flex: 1,
            dataIndex: "email",
            renderer: function (value) {
                return Ext.String.format(
                    '<a href="mailto:{0}">{1}</a>',
                    value,
                    value
                );
            },
        },
        {
            text: "Phone Number",
            width: 150,
            dataIndex: "phone",
        },
    ],
});
