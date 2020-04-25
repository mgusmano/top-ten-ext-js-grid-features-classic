Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.DataExporterView", {
  extend: "Ext.grid.Panel",
  xtype: 'DataExporterView',
  id: 'dataexportgrid',
  requires: [
    'Ext.grid.plugin.Exporter'
  ],
  plugins: {
    gridexporter: true
  },
  dockedItems: [
    {
      xtype: "toolbar",
      dock: "top",
      items: [
        {
          xtype: 'button',
          text: "Export",
          iconCls: "fa fa-download",
          // handler: function (button) {
          //   console.log('handler')
          // },
          menu : {
            defaults: {
              handler: function (btn) {
                console.log('exports to')
                var cfg = Ext.merge({
                  title: 'Grid export demo',
                  fileName: 'GridExport' + '.' + (btn.cfg.ext || btn.cfg.type)
              }, btn.cfg);
              Ext.getCmp('dataexportgrid').saveDocumentAs(cfg);
              }
            },
            items: [
              {
                text: 'CSV',
                cfg: {
                    type: 'csv'
                }
              }
            ]
          }
        }






      ]
    }
  ],
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
