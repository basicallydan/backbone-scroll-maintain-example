App.Router = Backbone.Router.extend({
	routes: {
		"first": "first",
		"second": "second",
	},

	first: function() {
		var firstView = new App.FirstView();
		// After rendering and inserting the view into the DOM, set the scroll
		// position immediately.
		$('body')
			.html(firstView.render().$el)
			.scrollTop(App.FirstView.viewState.get('scrollPosition'));
		// By assigning the constructor of FirstView to a property accessible
		// elsewhere we can modify its view state
		App.currentView = App.FirstView;
	},

	second: function() {
		var secondView = new App.SecondView();
		$('body').html(secondView.render().$el);
		App.currentView = App.SecondView;
	}
});

// This way we needn't worry about binding/unbinding from scroll for many different views
$(document).on('scroll', function () {
	// Not all views will be interested in maintaining scroll position, so
	// we need to check them first.
	if (App.currentView.viewState && typeof(App.currentView.viewState.get('scrollPosition')) !== 'undefined') {
		App.currentView.viewState.set('scrollPosition', document.body.scrollTop);
		// or
		// App.currentView.viewState.set('scrollPosition', $(document).scrollTop());
	}
});

App.router = new App.Router();

Backbone.history.start();

App.router.navigate("first", {
	trigger: true
});