Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.RowEditingView", {
  extend: "Ext.grid.Panel",
  xtype: "RowEditingView",
  plugins: {
    rowediting: {
        clicksToMoveEditor: 1,
        autoCancel: false
    }
  },
  store: { data: Data.getData() },
  columns: [
    { text: 'employeeNo', dataIndex: 'employeeNo'},
    { text: 'forename', dataIndex: 'forename',
      editor: {
        // defaults to textfield if no xtype is supplied
        allowBlank: false
      }
    },
    { text: 'surname', dataIndex: 'surname',
      editor: {
        xtype: 'textfield',
        allowBlank: false
      }
    },
    { text: 'joinDate', dataIndex: 'joinDate', xtype: 'datecolumn', width: 150,
      editor: {
        xtype: 'datefield',
        allowBlank: false,
        format: 'm/d/Y',
        minValue: '01/01/2011',
        minText: 'Cannot have a start date before the company existed!',
      }
    }
  ]
});
