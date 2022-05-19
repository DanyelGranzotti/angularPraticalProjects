var app = angular.module("ReaderApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    //   We used .when() to map the route to the template and controller
    .when("/books", {
      controller: "BookshelfController",
      templateUrl: "views/bookshelf.html",
    })
    .when("/books/:bookId", {
      controller: "BookController",
      templateUrl: "views/book.html",
    })
    .when("/books/:bookId/chapters/:chapterId", {
      controller: "ChapterController",
      templateUrl: "views/chapter.html",
    })
    // Otherwise if a user accidentally types in a wrong URL, we'll redirect them to the home page "/"
    .otherwise({
      redirectTo: "/books",
    });
  // Now when a user visits /, a view will be constructed by injecting home.html into the <div ng-view></div> in index.h
});
