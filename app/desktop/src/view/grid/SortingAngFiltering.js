Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.SortingAndFilteringView", {
  extend: "Ext.grid.Panel",
  xtype: 'SortingAndFilteringView',
  plugins: {
    gridfilters: true
  },
  multiColumnSort: true,
  store: {
    data: Data.getData(),
    sorters: [
      { property: 'salary', direction: 'DESC' },
    ]
  },
  columns: [
    { text: 'salary', dataIndex: 'salary'},
    { text: 'rating', dataIndex: 'rating',
      filter: 'number'
    },
    { text: 'employeeNo', dataIndex: 'employeeNo'},
    { text: 'forename', dataIndex: 'forename',
      filter: {
        type: 'string',
        itemDefaults: {
            emptyText: 'Search for...'
        }
      }
    },
    { text: 'surname', dataIndex: 'surname',
      filter: {
        type: 'string',
        itemDefaults: {
            emptyText: 'Search for...'
        }
      }
    },
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
