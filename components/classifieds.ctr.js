(function() {
  "use strict"

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory) {

      classifiedsFactory.getClassifieds().then(function(classifieds) {
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
