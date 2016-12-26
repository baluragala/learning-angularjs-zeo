var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html',
            controller:'homeController'
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function() {
                var vm = this;
                this.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            },
            controllerAs:'list'
        })
        .state('home.list.detail', {
            url: '/detail/{listName}',
            templateUrl: 'partial-home-list-detail.html',
            controller: function($stateParams) {
                var vm = this;
                console.log($stateParams)
                this.listName = $stateParams.listName;
            },
            controllerAs:'listDetail'
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }

        });

});

routerApp.controller('homeController',function($scope,$state,$rootScope){
  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      if(toParams.listName && toParams.listName != "Champion"){
        alert('Not authorized');
      }
  })

  $scope.gotoList = function() {
    console.log($state)
    $state.go('home.list');
  }
  $scope.gotoListItem = function(){
    console.log('gotoListItem')
    $state.go('home.list.detail',{listName:'Champion1'});
  }
})
routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});
