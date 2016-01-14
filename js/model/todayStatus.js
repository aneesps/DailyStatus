var TodayStatus = Backbone.Model.extend({
	defaults: {
		'date_id':'',
		'project_id': '',
		'activity_id': '',
		'description': ''
	},
	url: '/app/save-status'
});

var StatusCollection = Backbone.Collection.extend({
     model:TodayStatus
});