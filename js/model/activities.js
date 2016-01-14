var Activity = Backbone.Model.extend({
    defaults: {
        'id': '',
        'value': ''
    }
});

var Activities = Backbone.Collection.extend({
    model: Activity,
    url: '/app/get-activities'
});
