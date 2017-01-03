function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ ctrl.counter }}</h3>',
			'</div>'
		].join(''),
		controller: function() {
			this.counter = 0;
		},
		require: 'someDirective',
		controllerAs: 'ctrl',
		link: function (scope, elem, attrs, controller) {
			document.addEventListener("keyup", function () {
				controller.counter++;
				scope.$apply();
			});
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);