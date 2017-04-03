SkiApp.factory('PisteFactory',function(){

    function getPistes(){
        var storedPistes = JSON.parse(localStorage.getItem("pistes"));

        if(storedPistes == undefined || storedPistes.length < 0){
            storedPistes = [];
            localStorage.setItem("pistes",JSON.stringify(storedPistes));
        }

        var pistes = JSON.parse(localStorage.getItem("pistes"));
        return JSON.parse(localStorage.getItem("pistes"));
    };

    function addPiste(piste){
    
       var newPiste = {
            "name": piste.name,
            "type": piste.type,
            "distance": piste.distance,
            "status": piste.status,
            "skiarea": piste.skiarea
          
        }
        var storedPistes = JSON.parse(localStorage.getItem("pistes"));
        storedPistes.push(piste);

        localStorage.setItem("pistes",JSON.stringify(storedPistes));
    }


    function getPiste(){
        var storedPistes = JSON.parse(localStorage.getItem("pistes"));
        return storedPistes[JSON.parse(localStorage.getItem("selectedPiste"))];
    }
    function editPiste(piste){
        localStorage.setItem("selectedPiste",JSON.stringify(piste));
    }
    function deletePiste(pistes){
        localStorage.removeItem("pistes");
        localStorage.setItem("pistes",JSON.stringify(pistes));
    }
    function savePiste(piste){
        var storedPistes = JSON.parse(localStorage.getItem("pistes"));
        var index = getSelectedPisteIndex();
        storedPistes.splice(index,1);
        var newPiste = {
            "name": piste.name,
            "type": piste.type,
            "distance": piste.distance,
            "status": piste.status,
            "skiarea": piste.skiarea
     
        }
        storedPistes.push(newPiste);
        localStorage.removeItem("pistes");
        
        localStorage.setItem("pistes",JSON.stringify(storedPistes));
    }

    function getSelectedPisteIndex(){
        return JSON.parse(localStorage.getItem("selectedPiste"));
    }
    return {
        getPistes: getPistes,
        deletePiste: deletePiste,
        getSelectedPisteIndex : getSelectedPisteIndex,
        savePiste: savePiste,
        getPiste: getPiste,
        editPiste: editPiste,
        addPiste: addPiste
    };
});
