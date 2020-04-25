Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.DragAndDropView", {
  extend: "Ext.container.Container",
  xtype: 'DragAndDropView',
  controller: 'DragAndDropViewController',
  requires: [
    'Ext.grid.Panel',
    'Ext.layout.container.VBox',
    'Ext.dd.DropTarget',
    'Ext.selection.RowModel'
  ],
  items: [
    {
      xtype: 'grid',
      reference: 'grid',
      title: 'Grid',
      height: 400,
      enableDragDrop: true,
      viewConfig: {
        plugins: {
          gridviewdragdrop: {
            ddGroup: 'grid-to-form',
            enableDrop: false
          }
        }
      },
      flex: 1,
      store: { data: Data.getData() },
      columns: [
        {text: 'employeeNo', dataIndex: 'employeeNo'},
        {text: 'forename', dataIndex: 'forename'},
        {text: 'surname', dataIndex: 'surname'}
      ]
    },
    {
      xtype: 'form',
      reference: 'form',
      title: 'Form',
      bodyPadding: 10,
      labelWidth: 100,
      defaultType: 'textfield',
      items: [
        {fieldLabel: 'employeeNo',name: 'employeeNo'},
        {fieldLabel: 'forename',name: 'forename'},
        {fieldLabel: 'surname',name: 'surname'}
      ]
    }
  ]
});
