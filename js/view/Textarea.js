var TextArea = Backbone.View.extend({
	tagName: 'textarea',
	className:'form-control',

	initialize: function(options) {
		this.title = options.settings.title;
	},

	render: function(title) {
		this.$el.attr( 'placeholder', this.title );
		return this;
	},

	getValue:function() {
		return this.$el.val();
	}
});