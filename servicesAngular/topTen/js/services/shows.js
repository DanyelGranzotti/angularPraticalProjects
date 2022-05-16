// To create a new service, we need to use the app.factory method. like this:
app.factory("shows", [
  // We need to inject the $http service into the factory. Like this:
  "$http",
  // And pass the $http service into the factory as a parameter. Like this:
  function ($http) {
    // Then we can use the $http service in the factory. Like this:
    return (
      $http
        // We need to define the url of the service. Like this:
        // The url is the same as the url of the service.
        // Then we use the .get method to get the data from the url.
        .get(
          "https://content.codecademy.com/courses/ltp4/shows-api/shows.json?_gl=1*1t8bvjd*_ga*MTEyMzc2NzQyNS4xNjM5MzMwNjQ1*_ga_3LRZM6TM9L*MTY1MjY3MDg2My4zMi4xLjE2NTI2NzM3NTUuNTc."
        )
        // We need to define the success function. Like this:
        .success(function (data) {
          return data;
        })
        // And also a error function. Like this:
        .error(function (err) {
          return err;
        })
    );
  },
]);
