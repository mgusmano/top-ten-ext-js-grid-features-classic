Ext.define("TopTenExtJsGridFeaturesClassic.view.others.AllColumnsView", {
    extend: "Ext.grid.Panel",
    xtype: 'AllColumnsView',
    store: {
      model: "TopTenExtJsGridFeaturesClassic.model.EmployeeModel",
      data: Data.getData(2),
    },
    columns: [
      {text: 'employeeNo', dataIndex: 'employeeNo'},
      {text: 'rating',  renderer: function (value, metaData) {
        metaData.tdCls = value;
        return '<b>' + value + 'mjg' + '</b>';
    }

      , width: 80,dataIndex: 'rating',editor:{xtype:'textfield',allowBlank:false}},
      {text: 'salary',width: 125,dataIndex: 'salary',renderer: Ext.util.Format.usMoney,align:'right',editor:{xtype:'textfield',allowBlank:false}},
      {text: 'name', dataIndex: 'name'},
      {text: 'forename',width: 80,dataIndex: 'forename',editor:{xtype:'textfield',allowBlank:false}},
      {text: 'surname',width: 80,dataIndex: 'surname',editor:{xtype:'textfield',allowBlank:false}},
      {text: 'email',width: 200,dataIndex: 'email',editor:{xtype:'textfield',allowBlank:false}},
      {text: 'department',width: 125,dataIndex: 'department',editor:{xtype:'textfield',allowBlank:false}},
      {text: 'dob',width: 100,dataIndex: 'dob',xtype:'datecolumn',editor:{xtype:'datefield',allowBlank:false}},
      {text: 'joinDate',width: 100,dataIndex: 'joinDate',xtype:'datecolumn'},
      {text: 'noticePeriod',width: 80,dataIndex: 'noticePeriod'},
      {text: 'sickDays',width: 80,dataIndex: 'sickDays'},
      {text: 'holidayDays',width: 80,dataIndex: 'holidayDays'},
      {text: 'holidayAllowance',width: 80,dataIndex: 'holidayAllowance'},
    ],


    renderRating(value) {

      return '<span><b>' + value + '</b></span'

    }
});
