// This generates the view of textarea that is required to fill the status in the form to submit Daily Status.

var TextArea = Backbone.View.extend({
	tagName: 'textarea',
	

	initialize: function(options) {
		this.title = options.settings.title;
	},

	render: function(title) {
		this.$el.attr('maxlength="10"')
		this.$el.attr( 'placeholder', this.title );
		return this;
	},

	getValue:function() {
		return this.$el.val();
	}
});