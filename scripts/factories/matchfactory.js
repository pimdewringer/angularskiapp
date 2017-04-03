SkiApp.factory('MatchFactory',function(){

    function getMatches(){
        var storedMatches = JSON.parse(localStorage.getItem("matches"));

        if(storedMatches == undefined || storedMatches.length < 0){
            storedMatches = [];
            localStorage.setItem("matches",JSON.stringify(storedMatches));
        }

        var matches = JSON.parse(localStorage.getItem("matches"));
        return JSON.parse(localStorage.getItem("matches"));
    };

    function addMatch(match){
    
       var newMatch = {
            "skiarea": match.skiarea,
            "piste": match.piste,
            "lift": match.lift,
          
        }
        var storedMatches = JSON.parse(localStorage.getItem("matches"));
        storedMatches.push(match);

        localStorage.setItem("matches",JSON.stringify(storedMatches));
    }


    function getMatch(){
        var storedMatches = JSON.parse(localStorage.getItem("matches"));
        return storedMatches[JSON.parse(localStorage.getItem("selectedMatches"))];
    }


    function getSelectedMatchIndex(){
        return JSON.parse(localStorage.getItem("selectedMatches"));
    }
    return {
        getMatches: getMatches,
        getSelectedMatchIndex : getSelectedMatchIndex,
        getMatch: getMatch,
        addMatch: addMatch
    };
});
