SkiApp.controller('SkiPisteCrudController', function SkiPisteCrudController($scope,PisteFactory,MapFactory, $location) { 
   
  $scope.areas = MapFactory.getMaps();
   $scope.addPiste = function(pistes){
            PisteFactory.addPiste(pistes);
            $location.path("/skipistes");
         
      }
   
      $scope.maps = null;
 

   $scope.getPiste = function(){
      $scope.piste = PisteFactory.getPiste();
   };
   $scope.updatePiste = function(){
      PisteFactory.savePiste($scope.piste);
      $location.path("/skipistes");
   }


    $scope.getPiste();
   


});