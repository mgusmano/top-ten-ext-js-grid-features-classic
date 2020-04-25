Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.ColumnRenderersView", {
  extend: "Ext.grid.Panel",
  xtype: 'ColumnRenderersView',
  store: { data: Data.getData() },
  columns: [
    {text: 'employeeNo', dataIndex: 'employeeNo'},
    {text: 'forename', dataIndex: 'forename'},
    {text: 'surname', dataIndex: 'surname'},
    {text: 'rating', dataIndex: 'rating'},
    {
      text: 'rating',
      dataIndex: 'rating',
      renderer: function (value) {
        return '<b>' + value + '</b>';
      }
    }
  ]
});
