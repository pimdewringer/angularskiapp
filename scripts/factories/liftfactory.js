SkiApp.factory('LiftFactory',function(){

    function getLifts(){
        var storedLifts = JSON.parse(localStorage.getItem("lifts"));

        if(storedLifts == undefined || storedLifts.length < 0){
            storedLifts = [];
            localStorage.setItem("lifts",JSON.stringify(storedLifts));
        }

        var lifts = JSON.parse(localStorage.getItem("lifts"));
        return JSON.parse(localStorage.getItem("lifts"));
    };

    function addLift(lift){
        //lift.id = GUIDFactory.getGUID();
       var newLift = {
              "name": lift.name,
            "type": lift.type,
            "capacity": lift.capacity,
            "distance": lift.distance,
            "speed": lift.speed,
            "status": lift.status,
            "skiarea": lift.skiarea
          
        }
        var storedLifts = JSON.parse(localStorage.getItem("lifts"));
        storedLifts.push(lift);

        localStorage.setItem("lifts",JSON.stringify(storedLifts));
    }


    function getLift(){
        var storedLifts = JSON.parse(localStorage.getItem("lifts"));
        return storedLifts[JSON.parse(localStorage.getItem("selectedLift"))];
    }
    function editLift(lift){
        localStorage.setItem("selectedLift",JSON.stringify(lift));
    }
    function deleteLift(lifts){
        localStorage.removeItem("lifts");
        localStorage.setItem("lifts",JSON.stringify(lifts));
    }
    function saveLift(lift){
        var storedLifts = JSON.parse(localStorage.getItem("lifts"));
        var index = getSelectedLiftIndex();
        storedLifts.splice(index,1);
        var newLift = {
            "name": lift.name,
            "type": lift.type,
            "capacity": lift.capacity,
            "distance": lift.distance,
            "speed": lift.speed,
            "status": lift.status,
            "skiarea": lift.skiarea
     
        }
        storedLifts.push(newLift);
        localStorage.removeItem("lifts");
        
        localStorage.setItem("lifts",JSON.stringify(storedLifts));
    }

    function getSelectedLiftIndex(){
        return JSON.parse(localStorage.getItem("selectedLift"));
    }
    return {
        getLifts: getLifts,
        deleteLift: deleteLift,
        getSelectedLiftIndex : getSelectedLiftIndex,
        saveLift: saveLift,
        getLift: getLift,
        editLift: editLift,
        addLift: addLift
    };
});
