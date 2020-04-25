// var virtualstore = Ext.create('Ext.data.virtual.Store', {
//   //storeId: 'virtualStore',
//   fields: ['firstName', 'lastName', 'address', 'company', 'title', {name: 'id',type: 'int'}],
//   proxy: {
//     type: 'ajax',
//     url: 'https://llbzr8dkzl.execute-api.us-east-1.amazonaws.com/production/user',
//     reader: {
//       rootProperty: 'users',
//       totalProperty: 'totalCount'
//     }
//   },
//   pageSize: 25,
//   leadingBufferZone: 0,
//   trailingBufferZone: 0,
//   autoLoad: true
// });

// var bufferedstore = Ext.create('Ext.data.BufferedStore', {
//   fields: ['firstName', 'lastName', 'address', 'company', 'title',{name: 'id',type: 'int'}],
//   proxy: {
//     type: 'ajax',
//     url: 'https://llbzr8dkzl.execute-api.us-east-1.amazonaws.com/production/user',
//     reader: {
//       rootProperty: 'users',
//       totalProperty: 'totalCount'
//     }
//   },
//   pageSize: 25,
//   leadingBufferZone: 0,
//   trailingBufferZone: 0,
//   autoLoad: true,
// });

Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.VirtualView", {
    extend: "Ext.grid.Panel",
    xtype: 'VirtualView',
    title: "Infinite Grid",
    //store: virtualstore,
    //store: bufferedstore,
    //store: Ext.create('TopTenExtJsGridFeaturesClassic.store.BufferedStore',{}),
    //store: 'BufferedStore',
    columns: [
        { text: "First Name", dataIndex: "firstName" },
        { text: "Last Name", dataIndex: "lastName" },
        { text: "Title", dataIndex: "title" },
        { text: "Address", dataIndex: "address" },
        { text: "Company", dataIndex: "company" },
    ],

    dockedItems: [
        {
            xtype: "toolbar",
            dock: "top",
            cls: "toolbar-btn-shadow",
            items: [
                {
                    xtype: "button",
                    text: "Get",
                    xwidth: "100px",
                    iconCls: "fa fa-table",
                    handler: function (button) {
                        console.log(vs);
                        var range = vs.createActiveRange({
                            begin: 100,
                            end: 200,
                            prefetch: true, // allow prefetching beyond range
                            callback: function (range, begin, end) {
                                console.log(range);
                                console.log(begin);
                                console.log(end);
                            },
                            scope: this,
                        });

                        // Navigate to a different range. This will causes pages to load and
                        // the onRangeUpdate method will be called as the load(s) progress.
                        // This can change the length or number of records spanned on each
                        // call.
                        //
                        range.goto(300, 400);

                        function onRangeUpdate(range, begin, end) {
                            console.log(range);
                        }

                        // onRangeUpdate: function(range, begin, end) {
                        //     // Called when records appear in the range...
                        //     // We can check if all things are loaded:

                        //     // Or we can use range.records (sparsely populated)
                        // }
                    },
                },
            ],
        },
    ],
});
