var DailyForm = Backbone.View.extend({
	tagName:'form',
    className:'form',
	events:{
		'submit':'onSubmit'
	},




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
        this.$el.append('<h4>Bursts</h4>');
        this.$el.append( html );
        this.$el.append( '<button type="submit" class="btn btn-primary">Submit</button>' );

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
		 this.$el.find('textarea').val('').focus();

		var stringData = JSON.stringify( this.statusCollection.toJSON() );
		localStorage.setItem( LS_KEY, stringData );
	}
	
}); 