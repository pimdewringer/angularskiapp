describe("SkiPisteController", function(){

    beforeEach(module("SkiApp"));
    var controller;
    var scope;

     beforeEach(inject(function($rootScope,$controller){
            scope = $rootScope.$new();
            controller = $controller("SkiPisteController",{
            $scope: scope
        });
    }));


     
    it("Delete a piste from the piste list", function(){
        scope.pistes = [
        {
                
                "name": "piste1",
                "type": 2,
                "distance": 3,      
                "status": 1,      
                "skiarea": 1,      
            },
            {
               
                "name": "piste1",
                "type": 2,
                "distance": 3,      
                "status": 1,      
                "skiarea": 1,   
            }
        ];

        scope.deletePiste(0);
        expect(scope.pistes[0].name).toEqual("piste1");
    }); 

})