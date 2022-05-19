app.factory("photos", [
  "$http",
  function ($http) {
    return $http
      .get("https://content.codecademy.com/courses/ltp4/photos-api/photos.json")
      .success(function (data) {
        return data;
      })
      .error(function (data) {
        return data;
      });
  },
]);
