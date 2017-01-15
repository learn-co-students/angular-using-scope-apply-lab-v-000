angular
	.module('app')
	.directive('someDirective', function () {
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
      link: (scope, elem, attrs, ctrl) => {
        window.addEventListener('keydown', (evt) => {
          ctrl.counter++
          scope.$apply()
        })
      }
    }
  });
