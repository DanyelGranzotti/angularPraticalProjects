var app = angular.module("CalendarApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    //   We used .when() to map the route to the template and controller
    .when("/", {
      controller: "DayController",
      templateUrl: "views/day.html",
    })
    .when("/:id", {
      controller: "EventController",
      templateUrl: "views/event.html",
    })
    // Otherwise if a user accidentally types in a wrong URL, we'll redirect them to the home page "/"
    .otherwise({
      redirectTo: "/",
    });
  // Now when a user visits /, a view will be constructed by injecting home.html into the <div ng-view></div> in index.h
});
