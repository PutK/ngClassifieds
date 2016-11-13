(function() {
  "use strict"

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast) {

      classifiedsFactory.getClassifieds().then(function(classifieds) {
        $scope.classifieds = classifieds.data;
        //console.log(classifieds);
      });

      // $scope.name = {
      //   first : "Matty",
      //   last : "Kit"
      // };
      //
      // $scope.message = "Hello, World";

      var contact = {
        name: "Matty Kit",
        phone: "(555) 666-6666",
        email: "matty@gmail.com"
      }

      $scope.openSidebar = function() {
        $mdSidenav('left').open();
      }

      $scope.closeSidebar = function() {
        $mdSidenav('left').close();
      }

      $scope.saveClassified = function(classified) {
        if (classified) {
          classified.contact = contact;
          $scope.classifieds.push(classified);
          $scope.classified = {};
          $scope.closeSidebar();
          $mdToast.show(
            $mdToast.simple()
              .content("Classified saved!!")
              .position('top, right')
              .hideDelay(3000)
          );
        }
      }


    });
})();
