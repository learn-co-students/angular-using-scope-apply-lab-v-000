function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.counter }}</h3>',
			'</div>'
		].join(''),
		controller: function($scope) {
			this.counter = 0;
		},
		controllerAs: 'some',
		require: 'someDirective',
		link: function (scope, elem, attrs, ctrl) {
			var element = elem[0];
			var h3text = element.querySelector('h3')
			document.addEventListener("keydown", function(e){
				ctrl.counter += 1;
				scope.$apply();
			})
			
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);