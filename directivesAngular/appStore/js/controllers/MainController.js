app.controller("MainController", [
  "$scope",
  function ($scope) {
    //  Individual app info scope.
    $scope.move = {
      icon: "img/move.jpg",
      title: "MOVE",
      developer: "MOVE, Inc.",
      price: 0.99,
    };

    //  Individual app info scope.
    $scope.shutterbugg = {
      icon: "img/shutterbugg.jpg",
      title: "Shutterbugg",
      developer: "Chico Dusty",
      price: 2.99,
    };

    //  Individual app info scope.
    $scope.gameboard = {
      icon: "img/gameboard.jpg",
      title: "Gameboard",
      developer: "Armando P.",
      price: 1.99,
    };

    //  Scope that contains the data for the apps in store.
    $scope.apps = [
      {
        icon: "img/move.jpg",
        title: "MOVE",
        developer: "MOVE, Inc.",
        price: 0.99,
      },
      {
        icon: "img/shutterbugg.jpg",
        title: "Shutterbugg",
        developer: "Chico Dusty",
        price: 2.99,
      },
      {
        icon: "img/shutterbugg.jpg",
        title: "Shutterbugg",
        developer: "Chico Dusty",
        price: 2.99,
      },
      {
        icon: "img/shutterbugg.jpg",
        title: "Shutterbugg",
        developer: "Chico Dusty",
        price: 2.99,
      },
      {
        icon: "img/shutterbugg.jpg",
        title: "Shutterbugg",
        developer: "Chico Dusty",
        price: 2.99,
      },
    ];
  },
]);
