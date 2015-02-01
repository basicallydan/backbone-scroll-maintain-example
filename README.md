This is an example application for a blog post I wrote, titled [How to keep scroll position between views in Backbone](http://danhough.com/blog/backbone-scroll-position/).

The long and short of it:

> This all works by assigning a new Backbone Model to the constructor of whatever view that you'd like to maintain scroll position for. In our case it's `FirstView`. Then, I attach a scroll event callback to the body and set the scroll position for the "current" view, as long as it already has a scroll position.
> 
> Then, whenever the view which *does* have a maintained scroll position is rendered, the `body` is scrolled down to that position.