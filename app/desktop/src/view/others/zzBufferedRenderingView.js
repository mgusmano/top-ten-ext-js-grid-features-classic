Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.BufferedRenderingView", {
    extend: "Ext.panel.Panel",
    xtype: 'BufferedRenderingView',
    title: "Buffered Rendering",
    margin: "0 0 0 0",
    layout: "fit",
    data: null,
    numRecords: null,
    requires: ["Ext.form.RadioGroup", "Ext.form.field.Radio", "Ext.form.Label"],

    dockedItems: [
        {
            xtype: "toolbar",
            dock: "top",
            cls: "toolbar-btn-shadow",
            items: [
                {
                    text: "FakeData",
                    xwidth: "100px",
                    iconCls: "fa fa-table",
                    handler: function (button) {
                        Data.makeData();
                        var panel = button.up("panel");
                        var load = panel.down("#load");
                        panel.data = Data.data;
                        panel.numRecords = Data.numRecords;
                        var store = Ext.getStore("EmployeesStore");
                        store.setData(Data.data);
                        button.setDisabled(true);
                        load.setDisabled(false);
                    },
                },
                {
                    text: "Load",
                    itemId: "load",
                    disabled: true,
                    xwidth: "100px",
                    iconCls: "fa fa-download",
                    handler: function (button) {
                        var panel = button.up("panel");
                        var label = panel.down("label");
                        var radio = panel.down("radiogroup");
                        panel.startLoading();
                        setTimeout(function () {
                            panel.removeAll();
                            label.setText("");
                            var start = Ext.now();
                            panel.add(panel.getGrid(radio.getValue().buf));
                            var end = Ext.now();
                            var time = end - start;
                            label.setText(
                                Data.numRecords +
                                    " records, " +
                                    Math.round(time) +
                                    " milliseconds, bufferedRenderer: "
                            );
                            panel.endLoading();
                        }, 10);
                    },
                },
                {
                    xtype: "label",
                    text: "bufferedRenderer: ",
                    margin: "0 5 0 0",
                },
                {
                    xtype: "radiogroup",
                    items: [
                        {
                            xtype: "radiofield",
                            width: 55,
                            boxLabel: "false",
                            name: "buf",
                            inputValue: false,
                            checked: true,
                        },
                        {
                            xtype: "radiofield",
                            boxLabel: "true",
                            name: "buf",
                            inputValue: true,
                        },
                    ],
                },
            ],
        },
    ],

    getGrid: function (bufferedSetting) {
        return {
            xtype: "grid",
            margin: "1 0 0 0",
            loadMask: true,
            store: "EmployeesStore",
            bufferedRenderer: bufferedSetting,
            columns: [
                {
                    xtype: "rownumberer",
                    width: 40,
                    sortable: false,
                },
                { text: "1", width: 80, dataIndex: "rating" },
                { text: "2", width: 80, dataIndex: "rating" },
                { text: "3", width: 80, dataIndex: "rating" },
                { text: "4", width: 80, dataIndex: "rating" },
                { text: "5", width: 80, dataIndex: "rating" },
                { text: "6", width: 80, dataIndex: "rating" },
                { text: "7", width: 80, dataIndex: "rating" },
                { text: "6", width: 80, dataIndex: "rating" },
                { text: "9", width: 80, dataIndex: "rating" },
                { text: "10", width: 80, dataIndex: "rating" },
                { text: "11", width: 80, dataIndex: "rating" },
                { text: "12", width: 80, dataIndex: "rating" },
                { text: "13", width: 80, dataIndex: "rating" },
                { text: "14", width: 80, dataIndex: "rating" },
                { text: "15", width: 80, dataIndex: "rating" },
                { text: "16", width: 80, dataIndex: "rating" },
                { text: "17", width: 80, dataIndex: "rating" },
                { text: "18", width: 80, dataIndex: "rating" },
                { text: "19", width: 80, dataIndex: "rating" },
                { text: "20", width: 80, dataIndex: "rating" },
                { text: "12", width: 80, dataIndex: "rating" },
                { text: "22", width: 80, dataIndex: "rating" },
                { text: "23", width: 80, dataIndex: "rating" },
                { text: "24", width: 80, dataIndex: "rating" },
                { text: "25", width: 80, dataIndex: "rating" },
                { text: "26", width: 80, dataIndex: "rating" },
                { text: "27", width: 80, dataIndex: "rating" },
                { text: "28", width: 80, dataIndex: "rating" },
                { text: "29", width: 80, dataIndex: "rating" },
                { text: "30", width: 80, dataIndex: "rating" },

                {
                    text: "Id",
                    sortable: true,
                    dataIndex: "employeeNo",
                    groupable: false,
                    width: 80,
                },
                {
                    text: "Name",
                    sortable: true,
                    dataIndex: "name",
                    groupable: false,
                    width: 130,
                },
                {
                    text: "Date of birth",
                    dataIndex: "dob",
                    xtype: "datecolumn",
                    groupable: false,
                    width: 110,
                },
                {
                    text: "Join date",
                    dataIndex: "joinDate",
                    xtype: "datecolumn",
                    groupable: false,
                    width: 110,
                },
                {
                    text: "Notice period",
                    dataIndex: "noticePeriod",
                    width: 120,
                },
                {
                    text: "Email address",
                    dataIndex: "email",
                    width: 200,
                    groupable: false,
                    renderer: function (v) {
                        return '<a href="mailto:' + v + '">' + v + "</a>";
                    },
                },
                {
                    text: "Department",
                    dataIndex: "department",
                    hidden: true,
                },
                {
                    text: "Absences",
                    columns: [
                        {
                            text: "Illness",
                            dataIndex: "sickDays",
                            width: 60,
                            groupable: false,
                        },
                        {
                            text: "Holidays",
                            dataIndex: "holidayDays",
                            width: 70,
                            groupable: false,
                        },
                        {
                            text: "Holday Allowance",
                            dataIndex: "holidayAllowance",
                            width: 125,
                            groupable: false,
                        },
                    ],
                },
                {
                    text: "Rating",
                    width: 80,
                    sortable: true,
                    dataIndex: "rating",
                    groupable: false,
                },

                {
                    text: "Salary",
                    flex: 1,
                    sortable: true,
                    dataIndex: "salary",
                    align: "right",
                    renderer: Ext.util.Format.usMoney,
                    groupable: false,
                },
            ],
        };
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
