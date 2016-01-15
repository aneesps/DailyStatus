// This view hold the logic where to append the form and list of daily status.


var Root = Backbone.View.extend({
    el: '#root',


    initialize: function(options){
        this.dates = options.dates;
        this.projects = options.projects;
        this.activities = options.activities;

        this.statusCollection =  options.statusCollection;
        

    },

    render: function() {


        var dailyForm = new DailyForm({

            'dates':this.dates,
            'projects':this.projects,
            'activities':this.activities,

            'statusCollection':this.statusCollection
            
           
        });
        
        var list = new List({
            collection: statusCollection,
            projects: projects,
            activities:activities,
            dates:dates
        });
        this.$el.append(dailyForm.render().el);
        this.$el.append('<h4>History</h4>');
        this.$el.append( list.render().el );        
        return this;
    }
});
