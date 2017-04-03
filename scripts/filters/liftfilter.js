SkiApp.filter("liftfilter", function(){
   return function(input){
       if(input == 1){
           
           return "Chairlift";
       }

         if(input == 2){
           
           return "Anchor";
       }

         if(input == 3){
           
           return "Cabine";
       }
         if(input == 4){
           
           return "Train";
       }

        else {
           return "errore";
       }
   }
});