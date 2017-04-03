SkiApp.controller('SkiLiftController', function SkiPisteController($scope,LiftFactory, $location) {
 $scope.lifts = LiftFactory.getLifts();

  $scope.editLift = function(index){
  	LiftFactory.editLift(index);

   $location.path("/skilifts/edit");
 }

    $scope.deleteLift = function(index){
       $scope.lifts.splice(index,1);
       LiftFactory.deleteLift($scope.lift);
    };


});