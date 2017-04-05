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
		controllerAs: 'some',
		require: 'someDirective',
		link: function (scope, elem, attrs) {
			document.addEventListener('keydown', function(){
				scope.counter += 1;
				scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);