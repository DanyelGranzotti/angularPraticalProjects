var app = angular.module("NearMeApp", ["leaflet-directive", "ngRoute"]);
// Define the MainController and define "leaflet-directive" e "ngRoute" as a dependency.

app.config(function ($routeProvider) {
  $routeProvider
    //   We used .when() to map the route to the template and controller
    .when("/", {
      controller: "MainController",
      templateUrl: "views/main.html",
    })
    .when("/about", {
      controller: "AboutController",
      templateUrl: "views/about.html",
    })

    // Otherwise if a user accidentally types in a wrong URL, we'll redirect them to the home page "/"
    .otherwise({
      redirectTo: "/",
    });
  // Now when a user visits /, a view will be constructed by injecting home.html into the <div ng-view></div> in index.h
});
