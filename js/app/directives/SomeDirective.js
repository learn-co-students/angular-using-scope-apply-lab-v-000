function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ ctrl.counter }}</h3>',
			'</div>'
		].join(''),
		require: 'someDirective',
		controller: function() {
			this.counter = 0;
		},
		controllerAs: 'ctrl',
		link: function (scope, elem, attrs, ctrl) {
			document.addEventListener('keypress', function() {
				ctrl.counter++;

				scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
