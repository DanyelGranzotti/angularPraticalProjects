app.factory("events", [
  "$http",
  function ($http) {
    return $http
      .get(
        "https://content.codecademy.com/courses/ltp4/events-api/events.json?_gl=1*1yxk1jc*_ga*MTEyMzc2NzQyNS4xNjM5MzMwNjQ1*_ga_3LRZM6TM9L*MTY1MjcxMzQ1Mi4zNC4xLjE2NTI3MTY1NDUuNTc."
      )
      .success(function (data) {
        return data;
      })
      .error(function (data) {
        return data;
      });
  },
]);
