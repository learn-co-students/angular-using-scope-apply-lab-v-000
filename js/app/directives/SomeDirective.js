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
      var actualElement = elem[0];

      document.addEventListener('keypress', function () {
        ctrl.counter += 1;

        scope.$apply();
      })
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
