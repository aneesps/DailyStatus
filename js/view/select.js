var Select = Backbone.View.extend({
    tagName: 'select',
    className:'dropdown,form-control',


    events: {
        'change': 'onChange'
    },

    initialize: function(options) {
        this.title = options.settings.title;
        this.data = options.data;

    },

    render: function(title) {

        this.$el.append('<option value="">' + this.title + '</option>');
        this.data.each(this.renderEl.bind(this));
        return this;
    },

    renderEl: function(mod) {
        this.$el.append('<option value="' + mod.get('id') + '">' + mod.get('value') + '</option>');
    },

    onChange: function(statusCollection) {
        this.value = this.$el.val();      
       
    },
    getValue: function() {
        return this.value;
    }
});



