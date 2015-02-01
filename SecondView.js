/* SecondView.js */
App.SecondView = Backbone.View.extend({
	render: function () {
		this.$el.html('<div class="detail-view"></div>');
		this.$el.prepend('<div class="toolbar"><a href="#first">Back</a></h1>');
		this.$('.detail-view').append('<h1>More Details!</h1>');
		this.$('.detail-view').append('<p>This page should contain some more details!</p>');
		this.$('.detail-view').append('<img src="http://media.giphy.com/media/oAph7RAozxv7G/giphy.gif">');
		return this;
	}
});