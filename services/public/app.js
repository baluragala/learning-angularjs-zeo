angular.module('ngRouteExample', ['ngRoute'])
.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

 .controller('BookController', function($routeParams) {
    var self = this;
     self.name = 'BookController';
     self.params = $routeParams;
 })

 .controller('ChapterController', function($scope, $routeParams) {
     $scope.name = 'ChapterController';
     $scope.params = $routeParams;
 })

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/Book/:bookId', {
    templateUrl: 'book.html',
    controller: 'BookController',
    controllerAs: 'book',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  .when('/Book/:bookId/ch/:chapterId', {
    templateUrl: 'chapter.html',
    controller: 'ChapterController'
  })
  .otherwise('/');



  // configure html5 to get links working on jsfiddle
  //$locationProvider.html5Mode(true);
});



/*var app = angular.module('services',['ngCookies','ngRoute'])

app.controller('GithubUserController',function($http,$log,$cookies){

$http.get('https://api.github.com/users').then(
  function success(data){
    $log.info(data)
},
  function error(error){
    alert(JSON.stringify(error))
  }
)
$cookies.put('myFavorite', 'oatmeal');
$log.info($cookies.getAll())
$cookies.remove('myFavorite');
$cookies.remove('__ngDebug');
$log.info($cookies.getAll())
})




/*


angular.module('services')
.controller('booksController',function($q){

  function asyncGreet(name) {
    // perform some asynchronous operation, resolve or reject the promise when appropriate.
    return $q(function(resolve, reject) {
      setTimeout(function() {
          console.log(2)
        if (name > 0) {
          resolve('Hello, ' + name + '!');
        } else {
          reject('Greeting ' + name + ' is not allowed.');
        }
      }, 3000);
    });
  }

  console.log(1)
  var promise = asyncGreet('Robin Hood');
  console.log(promise)
  console.log(3)

  promise.then(function(greeting) {
    alert('Success: ' + greeting);
  }, function(reason) {
    alert('Failed: ' + reason);
  });

})


/*
angular.module('services').config(function(user){

})

 angular.module('services')
  .factory('dataService', function(){
    var books = [
      {
        title:'The JS good parts',
        price: 120,
        id:1
      },
      {
        title:'The JS for everyone',
        price: 150,
        id:2
      }
    ]

    function getBookById(id){
      for(book in books){
        //console.log(books[book])
        if(books[book].id === id)
          return books[book]
      }
      return {}
    }

    function getAllBooks(){
      return books
    }

    function setBook(book){
      books.push(book)
    }

    return {
        getAllBooks : getAllBooks,
        setBook: setBook,
        getBookById: getBookById
    }
  })

angular.module('services')
.controller('booksController',function(dataService){
  console.log(dataService.getAllBooks())
  var book = {
    title:'The JS for everyone - V2',
    price: 150,
    id:3
  }
  dataService.setBook(book)
  console.log(dataService.getBookById(2))
})

angular.module('services')
.controller('booksController1',function(myService,loggerService,user){
  user.name = "Zeo"

})

angular.module('services')
.controller('booksController2',function(myService,loggerService,user){
  loggerService.output('booksController2')
  loggerService.output(user.name)
})

angular.module('services').
  service('loggerService', bookLogger)

  function LoggerBase(){

  }

  LoggerBase.prototype.output = function(message){
    console.log('LoggerBase : ' + message)
  }

  function bookLogger(){
    LoggerBase.call(this)
    this.logBook = function(book){
      console.log('Book :' + book.title)
    }
  }
  bookLogger.prototype = Object.create(LoggerBase.prototype)

 angular.module('services')
  .service('myService', function() {

  //service is just a constructor function
  // that will be called with 'new'

  this.sayHello = function(name) {
     return "Hi " + name + "!";
  };
});


angular.module('services')
 .value('user',{})


 angular.module('services')
  .constant('appTitle',"BOOK APP")

  */
