SkiApp.factory('MapFactory',function(){

    function getMaps(){
        var storedMaps = JSON.parse(localStorage.getItem("maps"));
        if(storedMaps == undefined || storedMaps.length < 0){
            storedMaps = [];
            localStorage.setItem("maps",JSON.stringify(storedMaps));
        }
        var maps = JSON.parse(localStorage.getItem("maps"));
        return JSON.parse(localStorage.getItem("maps"));
    };

    function addMap(map){
      
       var newMap = {
            "id" : map.id,
            "name": map.name,
            "country": map.name,
            "map": map.capacity,
          
        }
        var storedMaps = JSON.parse(localStorage.getItem("maps"));
        storedMaps.push(map);
        localStorage.setItem("maps",
            JSON.stringify(storedMaps));
    }
    function deleteMap(maps){
        localStorage.removeItem("maps");
        localStorage.setItem("maps",JSON.stringify(maps));
    }
    function getSelectedMapIndex(){
        return JSON.parse(localStorage.getItem("selectedMap"));
    }
    function getMap(){
        var storedMaps = JSON.parse(localStorage.getItem("maps"));
        return storedMaps[JSON.parse(localStorage.getItem("selectedMap"))];
    }
    function editMap(map){
        localStorage.setItem("selectedMap",JSON.stringify(map));
    }
    function saveMap(map){

        var newMap = {
            "id" : map.id,
            "name": map.name,
            "country": map.country,
            "map": map.map,
     
        }
        var storedMaps = JSON.parse(localStorage.getItem("maps"));
        var index = getSelectedMapIndex();
        storedMaps.splice(index,1);

        storedMaps.push(newMap);
        localStorage.removeItem("maps");
        localStorage.setItem("maps",JSON.stringify(storedMaps));
    }
    return {
        getMaps: getMaps,
        deleteMap: deleteMap,
        getSelectedMapIndex : getSelectedMapIndex,
        saveMap: saveMap,
        getMap: getMap,
        editMap: editMap,
        addMap: addMap
    };
});
