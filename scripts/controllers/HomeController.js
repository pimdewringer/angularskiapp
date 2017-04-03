SkiApp.controller('HomeController', function HomeController($scope, $location, MapFactory) {
  $scope.maps = MapFactory.getMaps();

  $scope.showMap = function(index){
  	MapFactory.editMap(index);

  	$location.path("/skimaps/show");
  }



});