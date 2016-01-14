var Project = Backbone.Model.extend({
	defaults: {
		'id': '',
		'value': ''
	}
});

var Projects = Backbone.Collection.extend({
	model: Project,
	url: '/app/get-projects'
});