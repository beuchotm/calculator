function calc() 
         { 
             let a = document.getElementById("output").value 
             let b = eval(a) 
             document.getElementById("output").value = b 
         } 
         //fonction qui affiche la valeur
         function display(val) 
         { 
             document.getElementById("output").value+=val 
         } 
         //fonction qui efface l'écran 
         function clean() 
         { 
             document.getElementById("output").value = "" 
         } 