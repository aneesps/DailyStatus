var Dat = Backbone.Model.extend({
	defaults: {
		'id': '',
		'value': ''
	}
});

var Dates = Backbone.Collection.extend({
	model: Dat,
	url: '/app/get-dates'
});