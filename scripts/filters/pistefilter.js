SkiApp.filter("pistefilter", function(){
   return function(input){
       if(input == 1){
           
           return "Green";
       }

         if(input == 2){
           
           return "Blue";
       }

         if(input == 3){
           
           return "Red";
       }
         if(input == 4){
           
           return "Black";
       }

        else {
           return "errore";
       }
   }
});