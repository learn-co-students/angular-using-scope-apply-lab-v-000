angular
	.module('app')
	.directive('someDirective', SomeDirective);
	
function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.counter }}</h3>',
			'</div>'
		].join(''),
		require: 'someDirective',
		controller: function() {
			this.counter = 0;
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			var body = document.querySelector('body');
			
			body.addEventListener('keydown', function() {
				ctrl.counter++;
				scope.$apply();
			});
	
		}
	};
}

