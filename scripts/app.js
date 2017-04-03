// Define the `phonecatApp` module
var SkiApp = angular.module('SkiApp', ['ngRoute']);



SkiApp.config(function($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl : "views/home.html",
            controller: "HomeController"
        })

        .when('/skimaps',{
            templateUrl:  "views/map.html",
            controller: "SkiMapController"

        })

        .when('/skimaps/edit',{
            templateUrl:  "views/editMap.html",
            controller: "SkiMapCrudController"

        })

        .when('/skimaps/show',{
            templateUrl:  "views/showmap.html",
            controller: "ShowMapController"

        })

         .when('/skimaps/add',{
            templateUrl:  "views/addMap.html",
            controller: "SkiMapCrudController"

        })


        .when('/skilifts',{
            templateUrl:  "views/lift.html",
            controller: "SkiLiftController"
        })

        .when('/skilifts/add',{
            templateUrl:  "views/addLift.html",
            controller: "SkiLiftCrudController",
        
        })

        .when('/skilifts/edit',{
            templateUrl:  "views/editLift.html",
            controller: "SkiLiftCrudController",
      
        })



        .when('/skipistes',{
            templateUrl:  "views/pistes.html",
            controller: "SkiPisteController"
        })

        .when('/skipistes/add',{
            templateUrl:  "views/addPiste.html",
            controller: "SkiPisteCrudController",
        
        })


        .when('/skipistes/edit',{
            templateUrl:  "views/editPiste.html",
            controller: "SkiPisteCrudController",
        
        })




        .otherwise({
            redirectTo: "/home"
        });
});


