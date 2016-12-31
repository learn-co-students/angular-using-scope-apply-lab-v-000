function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ ctrl.counter }}</h3>',
			'</div>'
		].join(''),
		require: 'someDirective',
		controller: function($scope) {
			this.counter = 0;
		},
		controllerAs: 'ctrl',
		link: function (scope, elem, attrs, ctrl) {
			document.addEventListener('keyup', function() {
				ctrl.counter += 1;
				scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
