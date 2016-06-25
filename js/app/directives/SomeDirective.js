function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ counter }}</h3>',
			'</div>'
		].join(''),
		require: 'someDirective',
		controller: function() {
			this.counter = 0;
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			var actualElement = elem[0];
			var h3Element = actualElement.querySelector('h3');

			h3Element.addEventListener('click', function () {
					ctrl.counter ++;

					scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
