AFRAME.registerComponent('foo', {
	init: function() {
		this.el.addEventListener('click', (e) => {
			window.open('https://ebay.com');
		})
	}
})


AFRAME.registerComponent('navigate-on-click', {
	schema: {
		url: {default: ''}
	},

	init: function () {
		var data = this.data;
		var el = this.el;

		el.addEventListener('click', function () {
			window.open(data.url);
		});
	}
});  