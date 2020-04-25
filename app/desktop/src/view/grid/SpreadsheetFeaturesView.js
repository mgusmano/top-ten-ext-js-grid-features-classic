Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.SpreadsheetFeaturesView", {
    extend: "Ext.grid.Panel",
    xtype: 'SpreadsheetFeaturesView',
    //title: "Spreadsheet Features",
    store: "UsersStore",
    requires: [
        "TopTenExtJsGridFeaturesClassic.store.UsersStore",
        "Ext.grid.selection.SpreadsheetModel",
    ],

    selModel: {
        type: "spreadsheet",
        rowSelect: true,
        columnSelect: true,
        cellSelect: true, //true by default
        extensible: true,
    },

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

    dockedItems: [
        {
            xtype: "toolbar",
            dock: "top",
            cls: "toolbar-btn-shadow",
            items: [
                {
                    text: "Cell Context",
                    iconCls: "fa fa-snowflake",
                    handler: function (button) {
                        var panel = button.up("panel");
                        myCell = new Ext.grid.CellContext(
                            panel.getView()
                        ).setPosition(0, 1);
                        myCell.getCell().frame("red");
                    },
                },
                {
                    text: "Selection Cell Count",
                    iconCls: "fa fa-snowflake",
                    handler: function (button) {
                        var panel = button.up("panel");
                        var sel = panel.getSelectionModel().getSelected();
                        if (sel === null) {
                            alert(0);
                        } else {
                            alert(sel.getCount());
                        }
                    },
                },
                {
                    text: "Clear",
                    iconCls: "fa fa-snowflake",
                    handler: function (button) {
                        var panel = button.up("panel");
                        var sel = panel.getSelectionModel().getSelected();
                        if (sel != null) {
                            sel.clear();
                        }
                    },
                },
                {
                    text: "Each Cell",
                    iconCls: "fa fa-snowflake",
                    handler: function (button) {
                        var panel = button.up("panel");
                        var sel = panel.getSelectionModel().getSelected();
                        if (sel === null) {
                            alert("no cells selected");
                        } else {
                            sel.eachCell(function (
                                context,
                                colIndex,
                                rowIndex
                            ) {
                                alert(
                                    "row " +
                                        rowIndex +
                                        " col " +
                                        colIndex +
                                        " data is " +
                                        context.record.data[
                                            context.column.dataIndex
                                        ]
                                );
                            },
                            this);
                        }
                    },
                },
                {
                    text: "Get Records",
                    iconCls: "fa fa-snowflake",
                    handler: function (button) {
                        var panel = button.up("panel");
                        var sel = panel.getSelectionModel().getSelected();
                        var records = sel.getRecords();
                        Ext.Array.each(records, function (value) {
                            alert(Ext.encode(value.data));
                        });
                    },
                },
                {
                    text: "Get Range",
                    iconCls: "fa fa-snowflake",
                    handler: function (button) {
                        var panel = button.up("panel");
                        var sel = panel.getSelectionModel().getSelected();
                        alert("Range is: " + sel.getRange());
                    },
                },
                {
                    text: "Select Cells",
                    iconCls: "fa fa-snowflake",
                    handler: function (button) {
                        var panel = button.up("panel");
                        panel
                            .getSelectionModel()
                            .selectCells([0, 0], [2, 2], true);
                    },
                },
            ],
        },
    ],
});
