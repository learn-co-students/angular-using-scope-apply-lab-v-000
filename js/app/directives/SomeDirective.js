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
		link: function (scope, elem, attrs) {
			document.addEventListener('keydown', function() {
				scope.some.counter++;
				scope.$digest();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);