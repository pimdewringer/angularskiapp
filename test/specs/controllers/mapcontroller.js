describe("SkiMapController", function(){

    beforeEach(module("SkiApp"));
    var controller;
    var scope;

     beforeEach(inject(function($rootScope,$controller){
            scope = $rootScope.$new();
            controller = $controller("SkiMapController",{
            $scope: scope
        });
    }));


     
    it("Delete a map from the map list", function(){
        scope.maps = [
        {
                "id": "1",
                "name": "valto",
                "country": 2,
                "map": "https://cdn.wintersporters.nl/skimaps/1/622.jpg?fit=original",      
            },
            {
               "id": "2",
                "name": "la plagne",
                "country": 1,
                "map": "https://cdn.wintersporters.nl/skimaps/1/622.jpg?fit=original", 
            }
        ];

        scope.deleteMap(0);
        expect(scope.maps[0].name).toEqual("la plagne");
    }); 

})