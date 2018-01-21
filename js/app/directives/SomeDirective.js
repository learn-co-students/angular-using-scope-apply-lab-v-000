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
		link: function (scope, elem, attrs, ctrl) {
			// var element = elem[0];
			// var header = element.querySelector('h3');
			// console.log(header)
			window.addEventListener('keypress', function(){
				ctrl.counter += 1;
				scope.$apply();
			});

		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
