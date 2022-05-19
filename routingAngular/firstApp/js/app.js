var app = angular.module("GalleryApp", ["ngRoute"]);
// To use routes in angular, we need to configure the app to use the $routeProvider service
app.config(function ($routeProvider) {
  $routeProvider
    //   We used .when() to map the route to the template and controller
    .when("/", {
      controller: "HomeController",
      templateUrl: "views/home.html",
    })
    .when("/photos/:id", {
      controller: "PhotoController",
      templateUrl: "views/photo.html",
    })
    // Otherwise if a user accidentally types in a wrong URL, we'll redirect them to the home page "/"
    .otherwise({
      redirectTo: "/",
    });
  // Now when a user visits /, a view will be constructed by injecting home.html into the <div ng-view></div> in index.h
});
