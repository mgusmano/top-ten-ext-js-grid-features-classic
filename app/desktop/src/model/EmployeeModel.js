/* global Ext */
/* global FakeData */
Ext.define('TopTenExtJsGridFeaturesClassic.model.EmployeeModel', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'employeeNo' },
		{ name: 'rating', type: 'int' },
		{ name: 'salary', type: 'float' },
		{ name: 'name', convert: function (value, record) { return record.get('forename') + ' ' + record.get('surname'); } },
		{ name: 'forename' },
		{ name: 'surname' },
		{ name: 'email' },
		{ name: 'department' },
		{ name: 'dob', type: 'date', dateFormat: 'Ymd' },
		{ name: 'joinDate', type: 'date', dateFormat: 'Ymd' },
		{ name: 'noticePeriod' },
		{ name: 'sickDays', type: 'int' },
		{ name: 'holidayDays', type: 'int' },
		{ name: 'holidayAllowance', type: 'int' }
	],
	idField: 'employeeNo'
});