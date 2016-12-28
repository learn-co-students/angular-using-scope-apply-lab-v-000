function SomeDirective() {
	return {
		template: [
			'<div>',
				// '<h3>{{ counter }}</h3>',
				'<h3>{{ some.counter }}</h3>',
			'</div>'
		].join(''),
		controller: function($scope) {
			// $scope.counter = 0;
			this.counter = 0;
		},
		require: 'someDirective',
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			document.addEventListener("keydown", function(){
				ctrl.counter++;
				scope.$apply();
			})
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);