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
		require: 'someDirective',
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			document.addEventListener("keydown", function() {
				ctrl.counter +=1;
				scope.$apply();
			})

			}
		}
	}


angular
	.module('app')
	.directive('someDirective', SomeDirective);
