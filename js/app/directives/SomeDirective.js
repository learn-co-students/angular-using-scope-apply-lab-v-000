function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.counter }}</h3>',
			'</div>'
		].join(''),
		controller: function() {
			this.counter = 0;
		},
		controllerAs: 'some',
		require: 'someDirective',
		link: function (scope, elem, attrs, ctrl) {
			document.addEventListener('keydown', function() {
				ctrl.counter++;
				scope.$apply();
			})

		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
