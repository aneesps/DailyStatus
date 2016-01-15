// The view of submitted Daily Status is created a list with the data filled.
// This logic updates the list when a new daily status is submitted.


var ListItem = Backbone.View.extend({
	tagName: 'li',
	className:'list-group-item',

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

		


		if ( !! project ) {
			var tmp=_.template("<table class='table-bordered'><tr><td><%= date_new %></td><td><%= status %></td><td><%= activity_name %></td></tr><tr><td><%= today_date %></td><td></td><td><%= project_name %></td></tr></table>" );
		     var to_date = new Date();

			var date_new = "End of Day: " + date.get('value'),
			today_date = "Posted on: " + to_date.getDate()+'/'+ (to_date.getMonth()+1) +'/'+to_date.getFullYear()
			project_name = "Project is " + project.get('value'),
			activity_name = "Activity is " + activity.get('value'),
			status = this.model.get('description');

			this.complied =   tmp({date_new:date_new,project_name:project_name,activity_name:activity_name,status:status,today_date :today_date });




			this.$el.append(this.complied );
		} else {
			this.$el.text( 'nothing found for project_id' + this.model.get('project_id') );
			s
		}


		return this;
	}

});

var List = Backbone.View.extend({
	tagName: 'ul',
	className:'list-group',

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

			this.$el.append(li.render().el );
		};

		return this;
	}
});