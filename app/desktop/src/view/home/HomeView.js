Ext.define("TopTenExtJsGridFeaturesClassic.view.home.HomeView",{
	xtype: 'homeview',
	cls: 'homeview',
	controller: {type: 'homeviewcontroller'},
	viewModel: {type: 'homeviewmodel'},
	requires: [],
	extend: 'Ext.Container',
  scrollable: true,
  html: `Top 10 Ext JS Grid Features You May Not Know About
<br><br><br><br>

1-Buffered Renderer
<br><br>
2-Column Locking
<br><br>
3-Column Renderers
<br><br>
4-Column Widgets
<br><br>
5-Data Exporter
<br><br>
6-Drag and Drop
<br><br>
7-Row Editing
<br><br>
8-Row Expander
<br><br>
9-Sorting and Filtering
<br><br>
10-Spreadsheet Features
`
});