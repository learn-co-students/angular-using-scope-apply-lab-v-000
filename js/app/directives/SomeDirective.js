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
			// var actualElement = elem[0];
			// var body = actualElement.parentNode.parentNode;
			// body.addEventListener('keypress', function(){
			document.addEventListener('keypress', function(){
				ctrl.counter++;
				console.log('key pressed');
				scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);