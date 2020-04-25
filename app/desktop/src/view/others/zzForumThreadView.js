Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.ForumThreadView", {
    extend: "Ext.grid.Panel",
    xtype: 'ForumThreadView',
    requires: ["Ext.grid.selection.SpreadsheetModel"],

    title: "Forum Threads - Buffered Store and Renderer",
    columns: [
        {
            xtype: "rownumberer",
            width: 50,
            sortable: false,
        },
        {
            tdCls: "x-grid-cell-topic",
            text: "Topic",
            dataIndex: "title",
            flex: 1,
            renderer: function (value, p, record) {
                return Ext.String.format(
                    '<a href="http://sencha.com/forum/showthread.php?p={1}" target="_blank">{0}</a>',
                    value,
                    record.getId()
                );
            },
            sortable: false,
        },
        {
            text: "Author",
            dataIndex: "username",
            width: 100,
            hidden: true,
            sortable: false,
        },
        {
            text: "Replies",
            dataIndex: "replycount",
            align: "center",
            width: 70,
            sortable: false,
        },
        {
            id: "last",
            text: "Last Post",
            dataIndex: "lastpost",
            width: 130,
            xrenderer: Ext.util.Format.dateRenderer("n/j/Y g:i A"),
            sortable: false,
        },
    ],
    selModel: {
        pruneRemoved: false,
        type: "spreadsheet",
        //columnSelect: true,
        rowSelect: true,
    },
    store: Ext.create(
        "TopTenExtJsGridFeaturesClassic.store.ForumThreadsStore",
        {}
    ),

    margin: "0 0 5 0",
    loadMask: true,
    multiSelect: true,
    viewConfig: {
        trackOver: false,
        emptyText: '<h1 style="margin:20px">No matching results</h1>',
    },
});

//requires: [
//    'Ext.ux.form.SearchField'
//],
//dockedItems: [{
//    dock: 'top',
//    xtype: 'toolbar',
//    items: [
//        {
//            width: 400,
//            fieldLabel: 'Search',
//            labelWidth: 50,
//            xtype: 'searchfield',
//            store: 'ForumThreadsStore'
//        }
//    ]
//}],
