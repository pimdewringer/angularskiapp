SkiApp.filter("countryfilter", function(){
   return function(input){
       if(input == 1){
           
           return "France";
       }

         if(input == 2){
           
           return "Italy";
       }

         if(input == 3){
           
           return "Switzerland";
       }
         if(input == 4){
           
           return "Austria";
       }

        else {
           return "errore";
       }
   }
});