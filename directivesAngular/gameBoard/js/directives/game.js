app.directive("game", function () {
  return {
    //   The restrict property defines how the directive will be used. In this case, the "E" value means that the directive will be used as an HTML element.
    restrict: "E",
    //  The scope property specifies the scope that the directive is going to use. In this case, the value is true, which means that the directive will use the parent scope.
    scope: {
      //  The info property is the name of the property that will be used to access the data.
      info: "=",
    },
    //   The template property defines the HTML that will be used for the directive.
    templateUrl: "js/directives/game.html",
  };
});
