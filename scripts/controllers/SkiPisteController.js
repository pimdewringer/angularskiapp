SkiApp.controller('SkiPisteController', function SkiPisteController($scope, $location,PisteFactory) {
$scope.pistes = PisteFactory.getPistes();

  $scope.editPiste = function(index){
    PisteFactory.editPiste(index);

   $location.path("/skipistes/edit");
 }

    $scope.deletePiste = function(index){
       $scope.pistes.splice(index,1);
       PisteFactory.deletePiste($scope.piste);
    };

});