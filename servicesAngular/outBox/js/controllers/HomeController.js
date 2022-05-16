// To use servicesAngular, you need to define a new module and inject the servicesAngular module.
app.controller("HomeController", [
  "$scope",
  // We need to inject the service into the controller. Like this:
  "emails",
  // And pass the service into the controller as a parameter. Like this:
  function ($scope, emails) {
    // Then we can use the service in the controller. Like this:
    emails.success(function (data) {
      // And atributes the data to the scope. Like this:
      // After this we can use the data in the html as a normal scope.
      $scope.emails = data;
    });
  },
]);
