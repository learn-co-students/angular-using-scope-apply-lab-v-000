function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.counter }}</h3>',
			'</div>'
		].join(''),
		require: 'someDirective',
		controller: function($scope) {
			this.counter = 0;
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			//var actualElement = elem[0];
// 			console.log(elem);
//      var headElement = actualElement.querySelector('window');
 
      window.addEventListener('keyup', function () {
          ctrl.counter++;

          scope.$apply();
      });
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);