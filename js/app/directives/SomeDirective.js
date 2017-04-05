function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.counter }}</h3>',
			'</div>',
			'<p>test</p>'
		].join(''),
		require: 'someDirective',
		controller: function() {
			this.counter = 0;
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			var actualElement = elem[0];
			var h3Element = actualElement.querySelector('h3');

			document.addEventListener('keydown', function () {
					ctrl.counter ++;

					scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
