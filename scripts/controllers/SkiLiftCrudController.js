SkiApp.controller('SkiLiftCrudController', function SkiLiftCrudController($scope,MapFactory, LiftFactory, $location) {
  
  $scope.areas = MapFactory.getMaps();
  


   
   $scope.addLift = function(lifts){
          LiftFactory.addLift(lifts);
          $location.path("/skilifts");
         
      }
   

    $scope.lift = null;
 

   $scope.getLift = function(){
      $scope.lift = LiftFactory.getLift();
   };
   $scope.updateLift = function(){
      LiftFactory.saveLift($scope.lift);
      $location.path("/skilifts");
   }


    $scope.getLift();
   
      



});