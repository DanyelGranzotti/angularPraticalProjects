var app = angular.module("OutboxApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    //   We used .when() to map the route to the template and controller
    .when("/outbox", {
      controller: "HomeController",
      templateUrl: "views/home.html",
    })
    .when("/outbox/:id", {
      controller: "EmailController",
      templateUrl: "views/email.html",
    })
    // Otherwise if a user accidentally types in a wrong URL, we'll redirect them to the home page "/"
    .otherwise({
      redirectTo: "/outbox",
    });
  // Now when a user visits /, a view will be constructed by injecting home.html into the <div ng-view></div> in index.h
});
