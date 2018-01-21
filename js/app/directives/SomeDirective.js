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
		require: 'someDirective', //using controller of this directive instead of $scope (rather than parent with ^)
		link: function (scope, elem, attrs, ctrl) {
			document.addEventListener('keydown', function () {
				ctrl.counter++;
				scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
