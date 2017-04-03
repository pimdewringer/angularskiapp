SkiApp.controller('ShowMapController', function ShowMapController($scope ,$route,MatchFactory,MapFactory ,LiftFactory,PisteFactory,$location) {
	$scope.map = null;
	$scope.pistes = PisteFactory.getPistes();
	$scope.lifts = LiftFactory.getLifts();
  $scope.matches = MatchFactory.getMatches();

   $scope.getMap = function(){
      $scope.map = MapFactory.getMap();
   };


    $scope.$watch($scope.adding,function(value){
     
         $scope.getMap();

   });

  $scope.addMatch = function(match){
          match.skiarea = $scope.map.id;
          MatchFactory.addMatch(match);
          $scope.matches = MatchFactory.getMatches();
         
  }
   
  
});