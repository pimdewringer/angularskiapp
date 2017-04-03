SkiApp.controller('SkiMapCrudController', function SkiMapCrudController($scope,MapFactory, $location) { 
      $scope.addMap = function(map){
            MapFactory.addMap(map);
            $location.path("/skimaps");
         
      }
   
      $scope.maps = null;
 

   $scope.getMap = function(){
      $scope.maps = MapFactory.getMap();
   };
   $scope.editMap = function(){
      MapFactory.saveMap($scope.maps);
      $location.path("/skimaps");
   }


    $scope.getMap();
   


});