function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ counter }}</h3>',
			'</div>'
		].join(''),
		controller: function($scope) {
			$scope.counter = 0;
		},
		require: 'someDirective',
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			var getElement = elem[0];
			var token = getElement.querySelector('h3');

			token.addEventListener('click', function() {
				ctrl.counter++;
				scope.$apply();
			})
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
