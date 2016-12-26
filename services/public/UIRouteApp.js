var app = angular.module('uiRouteExample',['ui.router'])

app.config(function($stateProvider){
  $stateProvider.
    state('home-page', {
      url:'/home/{id}',
      templateUrl:'home.html',
      controller:function($state,$stateParams){
        console.log($state)
        var vm=this;
        vm.desc = "This is a home page"
      },
      controllerAs:'home'
    })
    .state('about', {
      url:'/about',
      template:'<h1>ABOUT</h1>'
    })
})
