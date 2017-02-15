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
			this.addCount = function() {
				this.counter += 1;
			};
			//$scope.counter = 0;
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			var actualElement = elem[0];
			//debugger;
			var documentSet = actualElement.ownerDocument

			documentSet.addEventListener('keydown',function(){
				ctrl.addCount();
				scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
