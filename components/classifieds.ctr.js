(function() {
  "use strict"

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope) {
        $scope.name = {
          first : "Matty",
          last : "Kit"
        };
        $scope.message = "Hello, World";
    })
})();
