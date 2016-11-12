(function() {
  "use strict"

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http) {

      $http.get('data/classifieds.json').then(function(classifieds) {
        $scope.classifieds = classifieds.data;
        //console.log(classifieds);
      });

      $scope.name = {
        first : "Matty",
        last : "Kit"
      };

      $scope.message = "Hello, World";
    });
})();
