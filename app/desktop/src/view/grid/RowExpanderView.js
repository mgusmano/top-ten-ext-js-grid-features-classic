Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.RowExpanderView", {
  extend: "Ext.grid.Panel",
  xtype: 'RowExpanderView',
  requires: [
    'Ext.grid.plugin.RowExpander'
  ],
  plugins: {
    rowexpander: {
      rowBodyTpl: new Ext.XTemplate (
        '<p><b>Name:</b> {forename} {surname}</p>',
        '<p><b>Salary:</b> {salary:this.formatSalary}</p>',
        {
          formatSalary: function(v) {
            var color = v < 100000 ? 'red' : 'green';
            return '<span style="color: ' + color + ';">' +
                Ext.util.Format.usMoney(v) + '</span>';
          }
        }
      )
    }
  },
  store: { data: Data.getData() },
  columns: [
    { text: 'employeeNo', dataIndex: 'employeeNo'},
    { text: 'forename', dataIndex: 'forename'},
    { text: 'surname', dataIndex: 'surname'},
    { text: 'rating', dataIndex: 'rating'},
    { text: 'salary', dataIndex: 'salary'},
    { text: 'name', dataIndex: 'name'},
    { text: 'email', dataIndex: 'email'},
    { text: 'department', dataIndex: 'department'},
    { text: 'dob', dataIndex: 'dob'},
    { text: 'joinDate', dataIndex: 'joinDate'},
    { text: 'noticePeriod', dataIndex: 'noticePeriod'},
    { text: 'sickDays', dataIndex: 'sickDays'},
    { text: 'holidayDays', dataIndex: 'holidayDays'},
    { text: 'holidayAllowance', dataIndex: 'holidayAllowance'}
  ]
});
