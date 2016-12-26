var app = angular.module('angularform', [])

app.controller('MainController',function ($scope) {

  $scope.submitForm = function(){
    if ($scope.userForm.$valid) {
          alert('our form is amazing');
    }else{
        alert('Form conatins errors');
    }
  }
})
