$(function(){
	//setup scrolling
	$(document)
	.bind('touchmove', function(e){
		if (window.inAction || window.editing || window.draggingDown || document.height <= 356) {
			e.preventDefault();
		} else {
			window.globalDrag = true;
		}
	})
	.bind('touchend touchcancel', function(e){
		window.globalDrag = false;
	});
	
	var app = new Home([
		new List($.os.ios ? 'Hello':'This works better on iOS', [
			new Todo('Swipe right to complete'),
			new Todo('Swipe left to delete'),
			new Todo('Tap on text to edit'),
			new Todo('Long tap to change order'),
			new Todo('Drag down to add new'),
			new Todo('Pinch in to go back.')
		]),
		new List('This is a demo', [
			new Todo('Built with HTML5'),
			new Todo('CSS3'),
			new Todo('and Zepto.js')
		]),
		new List('by Evan You', [
			new Todo('@youyuxi'),
			new Todo('By the way'),
			new Todo('I\'m looking for a job!'),
			new Todo('youyuxi.com')
		])
	]);
	
	app.render().appendTo('#wrapper');
	
});