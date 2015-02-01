/* FirstView.js */
App.FirstView = Backbone.View.extend({
	render: function () {
		var listHTML = $('<ul></ul>');
		var i;
		// For this example the first view needs to be long enough to scroll
		for (i = 1; i <= 40; i++) {
			listHTML.append('<li><a href="#second">View 1, Item number ' + i + '</a></li>');
		}
		this.$el.html(listHTML);
		return this;
	}
});

// Create something to store the view state in, statically attached to the View
// constructor itself, rather than an instance. The default scroll position
// should be 0, and remember this'll only be set *once*, when this file first
// loads.
App.FirstView.viewState = new Backbone.Model();
App.FirstView.viewState.set('scrollPosition', 0);