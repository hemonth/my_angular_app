angular.module('main1',['person','myShoppingList','TestApp','shop','shopManager','ngRoute','Manager','MyBook'])
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider
        .when("/index", {
            templateUrl : "index.html"

        })
        // .when("/purchaseHistory", {
        //     templateUrl : "views/toDoApp/purchaseHistory.html",
        //     controller : "MyCtrl",
        //     controllerAs : "myCtrl"
        // })
        .when("/myManager", {
            templateUrl : "views/toDoApp/Manager.html",
            controller : "MyManager",
            controllerAs : "myMng"
        })
        // .when("/myInventory", {
        //     templateUrl : "views/toDoApp/myInventory.html",
        //     controller : "MyCtrl",
        //     controllerAs : "myCtrl"
        // })
        .when("/shop", {
            templateUrl : "views/shop/shop.html",
            controller : "ShopController",
            controllerAs : "myCtrl"
        })
        .when("/shopManager", {
            templateUrl : "views/shop/shopManager.html",
            controller : "ShopMangerController",
            controllerAs : "mySm"
        })
        .when("/person", {
            templateUrl : "views/person/person.html",
            controller : "MyPerson",
            controllerAs : "p"
        })
        .when("/test", {
            templateUrl : "test.html",
            controller : "TestController",
            controllerAs : "ctrl"
        })
        .when("/book", {
            templateUrl : "views/mybook/book.html",
            controller : "MyBookCtrl",
            controllerAs : "bc"
        })
        .otherwise("/person");
    }
  ]);
