app.factory("books", [
  "$http",
  function ($http) {
    return $http
      .get(
        "https://content.codecademy.com/courses/ltp4/books-api/books.json?_gl=1*1a1n3gt*_ga*MTEyMzc2NzQyNS4xNjM5MzMwNjQ1*_ga_3LRZM6TM9L*MTY1MjgxMjg4My4zNy4xLjE2NTI4MTM5MjQuMzM."
      )
      .success(function (data) {
        return data;
      })
      .error(function (data) {
        return data;
      });
  },
]);
