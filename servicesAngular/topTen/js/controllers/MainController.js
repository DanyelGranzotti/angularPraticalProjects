// To use servicesAngular, you need to define a new module and inject the servicesAngular module.
app.controller("MainController", [
  "$scope",
  // We need to inject the service into the controller. Like this:
  "shows",
  // And pass the service into the controller as a parameter. Like this:
  function ($scope, shows) {
    // Then we can use the service in the controller. Like this:
    shows.success(function (data) {
      // And atributes the data to the scope. Like this:
      // After this we can use the data in the html as a normal scope.
      $scope.shows = data;
    });
  },
]);
