var DailyForm = Backbone.View.extend({
	tagName:'form',
	events:{
		'submit':'onSubmit'
	},

	// initialize: function(){
	// 	 this.$el.append('<input type="text" placeholder="Enter your status"/><button type="submit">Save</button>');
	// 	 return this;
	// },
	


	initialize: function(options){
		this.dates      = options.dates;
		this.projects   = options.projects;
        this.activities = options.activities;
        
        this.statusCollection  = options.statusCollection;
	},



	render: function(){

		var html = [];

		this.chooseDate = new Select({
            data: this.dates,
            /**/
            settings: {
                title: 'Select a Date'
            }
        });

        html.push(this.chooseDate.render().el);

        this.chooseProject = new Select({
            data: this.projects,
            /**/
            settings: {
                title: 'Select a Project'
            }
        });

        html.push(this.chooseProject.render().el);

        this.chooseActivity = new Select({
            data: this.activities,
            /**/
            settings: {
                title: 'Select a Activity'
            }
        });
        
        html.push(this.chooseActivity.render().el);

        this.chooseDescription = new TextArea({
        	settings: {
                title: 'Add a description:'
            }
        });

        html.push( this.chooseDescription.render().el );

        this.$el.append( html );
        this.$el.append( '<button type="submit">Submit</button>' );

        return this;


	},

	onSubmit: function (e) {
		e.preventDefault();
		console.log(this.statusCollection);
		
		 this.statusCollection.add({
			'description': this.chooseDescription.getValue(),
			'project_id':this.chooseProject.getValue(),			
			'activity_id':this.chooseActivity.getValue(),
			'date_id':this.chooseDate.getValue()
		});
		 console.log(this.chooseProject.getValue());

		var stringData = JSON.stringify( this.statusCollection.toJSON() );
		localStorage.setItem( LS_KEY, stringData );
	}
	
}); 