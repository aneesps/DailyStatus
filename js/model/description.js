var Description = Backbone.Model.extend({
    defaults: {
        'id': '',
        'value': ''
    }
});

var Descriptions = Backbone.Collection.extend({
    model: Description,
    url: '/app/get-Descriptions'
});
