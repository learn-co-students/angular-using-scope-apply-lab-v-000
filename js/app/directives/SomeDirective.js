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
    require: 'someDirective',
		link: function (scope, elem, attrs, ctrl) {
      document.addEventListener('keyup', function () {
        ctrl.counter++;
        scope.$apply();
      })
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
