function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ ctrl.counter }}</h3>',
			'</div>'
		].join(''),
		controller: function($scope) {
			this.counter = 0;
		},
		controllerAs: 'ctrl',
		link: function (scope, elem, attrs, ctrl) {
			console.log(ctrl.counter)
			document.addEventListener('keypress', function(){
				ctrl.counter++;
				scope.$apply();
			});
			


		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);