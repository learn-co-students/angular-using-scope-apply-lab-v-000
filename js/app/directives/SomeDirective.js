function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.counter }}</h3>',
			'</div>'
		].join(''),
	//	require: 'someDirective',
		controller: function($scope) {
			this.counter = 0;
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {

			document.addEventListener('keypress', function(e){
      	ctrl.counter++;

				scope.$apply();
			}, false)
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
