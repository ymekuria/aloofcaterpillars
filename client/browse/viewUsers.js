angular.module('viewReq')

.directive('viewDirective', functio($compile) {
  return {
    templateURL: 'viewUsers.html',
    restrict: 'E',
    compile: function compile(element, attrs, transclude) {

      return {
        pre: function Link(scope, element, attrs, controller)
      },
        post: function postLink(scope, element, attrs, controller) {

        }
    }

  }
})