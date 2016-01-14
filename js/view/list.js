var ListItem = Backbone.View.extend({
	tagName: 'li',

	initialize: function(options) {
		this.projects = options.projects;
		this.activities = options.activities;
		this.dates = options.dates;
	},

	render: function () {

		var projId = parseInt( this.model.get('project_id') );
		var project = this.projects.findWhere({ id: projId });

		var actvId = parseInt( this.model.get('activity_id') );
		var activity = this.activities.findWhere({ id: actvId });

		var dateId = parseInt( this.model.get('date_id') );
		
		var date = this.dates.findWhere({ id: dateId });

		// console.log(date);
	


		if ( !! project ) {
			this.$el.text( this.model.get('description') + project.get('value') + activity.get('value') + date.get('value') );
		} else {
			this.$el.text( 'nothing found for project_id' + this.model.get('project_id') );
			console.log( this.model );
		}

		// this.$el.text( this.model.get('description') + project.get('value') );

		return this;
	}

});

var List = Backbone.View.extend({
	tagName: 'ul',

	initialize: function (options) {
		this.projects = options.projects;
		this.activities = options.activities;
		this.dates = options.dates;

		this.listenTo( this.collection, 'add', this.render );
	},

	allRender: function() {
		var li, html = [];

		this.collection.each(function(mod) {
			li = new ListItem({
			 model: mod, 
			 projects: this.projects,
			 activities:this.activities,
			 dates:this.dates	
			  });
			html.push( li.render().el );
		});

		this.$el.html( html );
	},

	render: function (mod, col, action) {

		if ( ! action ) {
			this.allRender();
		} else if ( !! action && action.add ) {
			li = new ListItem({
			 model: mod, 
			 projects:this.projects,
			  activities:this.activities,
			 dates:this.dates	
			  });
			this.$el.append( li.render().el );
		};

		return this;
	}
});