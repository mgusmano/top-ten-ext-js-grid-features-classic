Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.ColumnLockingView", {
  extend: "Ext.grid.Panel",
  xtype: 'ColumnLockingView',
  store: { data: Data.getData() },
  columns: [
    { text: 'employeeNo', dataIndex: 'employeeNo',locked: true},
    { text: 'forename', dataIndex: 'forename',locked: true},
    { text: 'surname', dataIndex: 'surname',locked: true},
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
