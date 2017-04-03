SkiApp.filter("statusfilter", function(){
   return function(input){
       if(input == 1){
           
           return "Open";
       }

         if(input == 2){
           
           return "Closed";
       }

         if(input == 3){
           
           return "Soon to open";
       }

        else {
           return "errore";
       }
   }
});