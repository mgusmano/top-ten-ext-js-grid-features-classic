Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.BufferedRendererView", {
    extend: "Ext.panel.Panel",
    xtype: 'BufferedRendererView',
    margin: "0 0 0 0",
    layout: "fit",
    data: null,
    numRecords: null,
    // requires: [
    //     "TopTenExtJsGridFeaturesClassic.store.BufferedStore",
    // ],

    dockedItems: [
        {
            xtype: "toolbar",
            dock: "top",
            cls: "toolbar-btn-shadow",
            items: [
                // {
                //   xtype: 'button', text: 'FakeData', xwidth: '100px', "iconCls": "fa fa-table",
                //   handler: function(button) {
                //     Data.makeData();
                //     var panel = button.up('panel');
                //     var load = panel.down('#load');
                //     panel.data = Data.data;
                //     panel.numRecords = Data.numRecords;
                //     var store = Ext.create('TopTenExtJsGridFeaturesClassic.store.BufferedStore',{})
                //     var numRecords = store.totalCount;
                //     console.log(numRecords)

                //     //store.setData(Data.data);
                //     button.setDisabled(true);
                //     load.setDisabled(false);
                //   }
                // },
                {
                    text: "Load",
                    itemId: "load",
                    disabled: false,
                    xwidth: "100px",
                    iconCls: "fa fa-download",
                    handler: function (button) {
                        var panel = button.up("panel");
                        var label = panel.down("label");
                        //var radio = panel.down('radiogroup');
                        //panel.startLoading();
                        //setTimeout(function(){
                        //panel.removeAll();
                        label.setText("");
                        var start = Ext.now();

                        var thegrid = panel.getGrid();

                        panel.add(thegrid);
                        // var end = Ext.now();
                        // var time = end - start;

                        // console.log(thegrid.store)

                        // //var records = thegrid.store.totalCount
                        // setTimeout(function(){
                        //   label.setText( thegrid.store.totalCount + ' records, ' + Math.round(time) + ' milliseconds');
                        // }, 500);
                        // panel.endLoading();

                        // setTimeout(() => {
                        //     //FPS.start();
                        //     Scroller.scroll({
                        //       element: thegrid,
                        //         scrollFn(scrollTop) {
                        //             console.log(thegrid.getScrollable())
                        //             thegrid.getScrollable().scrollTo(0, scrollTop, false);
                        //         },
                        //         callback() {
                        //             //FPS.stop();
                        //         }

                        //     });
                        // }, 500);

                        //    }, 10);
                    },
                },
                {
                    xtype: "label",
                    text: "",
                    margin: "0 5 0 0",
                },
                // {
                //   xtype: 'radiogroup', items: [
                //       {xtype: 'radiofield', width: 55, boxLabel: 'false', name: 'buf', inputValue: false, checked: true },
                //       {xtype: 'radiofield', boxLabel: 'true', name: 'buf', inputValue: true, checked: false }
                //   ]
                // }
            ],
        },
    ],

    getGrid: function () {
        //console.log('bufferedSetting is: ' + bufferedSetting)
        return {
            xtype: "grid",
            //bufferedRenderer: bufferedSetting,
            //store: { type: `${this.testname}-store` },
            store: Ext.create(
                "TopTenExtJsGridFeaturesClassic.store.BufferedStore",
                {}
            ),
            //store: 'BufferedStore',
            //height: 500,
            //width: 500,
            //scrollable: true,
            columns: [
                { text: "First Name", dataIndex: "firstName" },
                { text: "Last Name", dataIndex: "lastName" },
                { text: "Title", dataIndex: "title" },
                { text: "Address", dataIndex: "address" },
                { text: "Company", dataIndex: "company" },
            ],
        };

        // return {
        //   xtype: 'grid',
        //   // plugins: {
        //   //   cellediting: {
        //   //       clicksToEdit: 1
        //   //   }
        //   // },
        //   plugins: {
        //     rowediting: {
        //         clicksToMoveEditor: 1,
        //         autoCancel: false
        //     }
        //   },
        //   margin: '1 0 0 0',
        //   loadMask: true,
        //   store: 'EmployeesStore',
        //   bufferedRenderer: bufferedSetting,
        //   columns: [{
        //       xtype: 'rownumberer',
        //       width: 40,
        //       sortable: false
        //   },
        //   {text: 'rating',width: 80,dataIndex: 'rating',editor:{xtype:'textfield',allowBlank:false}},
        //   {text: 'salary',width: 125,dataIndex: 'salary',renderer: Ext.util.Format.usMoney,align:'right',editor:{xtype:'textfield',allowBlank:false}},
        //   {text: 'first',width: 80,dataIndex: 'forename',editor:{xtype:'textfield',allowBlank:false}},
        //   {text: 'last',width: 80,dataIndex: 'surname',editor:{xtype:'textfield',allowBlank:false}},
        //   {text: 'email',width: 200,dataIndex: 'email',editor:{xtype:'textfield',allowBlank:false}},
        //   {text: 'department',width: 125,dataIndex: 'department',editor:{xtype:'textfield',allowBlank:false}},
        //   {text: 'birth date',width: 100,dataIndex: 'dob',xtype:'datecolumn',editor:{xtype:'datefield',allowBlank:false}},
        //   {text: 'join date',width: 100,dataIndex: 'joinDate',xtype:'datecolumn'},
        //   {text: '9',width: 80,dataIndex: 'sickDays'},
        //   {text: '10',width: 80,dataIndex: 'holidayDays'},
        //   {text: '11',width: 80,dataIndex: 'holidayAllowance'},
        //   {text: '12',width: 80,dataIndex: 'noticePeriod'},
        //   {text: '13',width: 80,dataIndex: 'rating'},
        //   {text: '14',width: 80,dataIndex: 'rating'},
        //   {text: '15',width: 80,dataIndex: 'rating'},
        //   {text: '16',width: 80,dataIndex: 'rating'},
        //   {text: '17',width: 80,dataIndex: 'rating'},
        //   {text: '18',width: 80,dataIndex: 'rating'},
        //   {text: '19',width: 80,dataIndex: 'rating'},
        //   {text: '20',width: 80,dataIndex: 'rating'},
        //   {text: '12',width: 80,dataIndex: 'rating'},
        //   {text: '22',width: 80,dataIndex: 'rating'},
        //   {text: '23',width: 80,dataIndex: 'rating'},
        //   {text: '24',width: 80,dataIndex: 'rating'},
        //   {text: '25',width: 80,dataIndex: 'rating'},
        //   {text: '26',width: 80,dataIndex: 'rating'},
        //   {text: '27',width: 80,dataIndex: 'rating'},
        //   {text: '28',width: 80,dataIndex: 'rating'},
        //   {text: '29',width: 80,dataIndex: 'rating'},
        //   {text: '30',width: 80,dataIndex: 'rating'},
        //   {
        //       text: 'Id',
        //       sortable: true,
        //       dataIndex: 'employeeNo',
        //       groupable: false,
        //       width: 80
        //   }, {
        //       text: 'Name',
        //       sortable: true,
        //       dataIndex: 'name',
        //       groupable: false,
        //       width: 130
        //   }, {
        //       text: 'Date of birth',
        //       dataIndex: 'dob',
        //       xtype: 'datecolumn',
        //       groupable: false,
        //       width: 110
        //   }, {
        //       text: 'Join date',
        //       dataIndex: 'joinDate',
        //       xtype: 'datecolumn',
        //       groupable: false,
        //       width: 110
        //   }, {
        //       text: 'Notice period',
        //       dataIndex: 'noticePeriod',
        //       width: 120
        //   }, {
        //       text: 'Email address',
        //       dataIndex: 'email',
        //       width: 200,
        //       groupable: false,
        //       renderer: function (v) {
        //           return '<a href="mailto:' + v + '">' + v + '</a>';
        //       }
        //   }, {
        //       text: 'Department',
        //       dataIndex: 'department',
        //       hidden: true
        //   }, {
        //       text: 'Absences',
        //       columns: [{
        //           text: 'Illness',
        //           dataIndex: 'sickDays',
        //           width: 60,
        //           groupable: false
        //       }, {
        //           text: 'Holidays',
        //           dataIndex: 'holidayDays',
        //           width: 70,
        //           groupable: false
        //       }, {
        //           text: 'Holday Allowance',
        //           dataIndex: 'holidayAllowance',
        //           width: 125,
        //           groupable: false
        //       }]
        //   },
        //   {
        //       text: 'Rating',
        //       width: 80,
        //       sortable: true,
        //       dataIndex: 'rating',
        //       groupable: false
        //   },

        //   {
        //       text: 'Salary',
        //       flex: 1,
        //       sortable: true,
        //       dataIndex: 'salary',
        //       align: 'right',
        //       renderer: Ext.util.Format.usMoney,
        //       groupable: false
        //   }
        // ]
        // }
    },

    startLoading: function (message) {
        Ext.Msg.show({
            title: "Please wait",
            width: 275,
            maxWidth: 280,
            height: 100,
            maxHeight: 100,
            closable: false,
            msg: "Loading data...",
        });
    },

    endLoading: function () {
        Ext.Msg.hide();
    },

    //initComponent: function() {
    //    this.items =  [
    //    //    this.getGrid(false)
    //    ];
    //    this.callParent();
    //},
});
