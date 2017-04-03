SkiApp.controller('SkiMapController', function SkiMapController($scope,$location, MapFactory) {
  $scope.maps = MapFactory.getMaps();

  $scope.showMap = function(index){
  	MapFactory.editMap(index);

  	$location.path("/skimaps/show");
  }

   $scope.editMap = function(index){
  	MapFactory.editMap(index);

  	$location.path("/skimaps/edit");
  }

    $scope.deleteMap = function(index){
       $scope.maps.splice(index,1);
       MapFactory.deleteMap($scope.maps);
    };

});