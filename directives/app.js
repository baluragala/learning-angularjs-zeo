angular.module("dir",[])
angular.module("dir").controller('DirController', function($scope){
    $scope.color="magenta"
    $scope.authincated=true
    $scope.someObj={}
    $scope.someArr=[]
    $scope.someNumber=10
    $scope.greeting = "zeolearn"
    $scope.setColor = function() {
      $scope.color = $scope.newColor
    }
})
angular.module("dir").controller('anotherController', function($scope){
    $scope.color="blue"
    $scope.someObj={}
    $scope.someArr=[]
    $scope.someNumber=10
    $scope.greeting = "jhon"
    $scope.setColor = function() {
      $scope.color = $scope.newColor
    }
})
angular.module("dir").
  directive('helloWorld', function() {
  return {
      restrict: 'AE',
      replace: true,
      template: '<h3>Hello World!!</h3>'
  };
});
angular.module("dir").directive('colorWorld', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<p style="background-color:{{color}}">Hello {{greeting}}</p>',
    scope: {
      color:'@',
      greeting:'@'
    },
    link: function(scope, elem, attrs) {
      console.log(scope)
      elem.bind('click', function() {
        scope.$apply(function() {
          scope.color = "white";
        });
      });
      elem.bind('mouseover', function() {
        elem.css('background-color', 'red');
      });
    }
  };
});
