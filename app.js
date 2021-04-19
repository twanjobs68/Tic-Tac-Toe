//*this function needs to run only at beginning of original game on welcome page, after title shows and box is drawn and */

// function plan () {
//     alert("Determine who will go first by flip of a coin please-heads or tails!!");
//    // alert("ClIck corresponding button below !")//
// }
// plan();/* nope*/

//*function added to alert user when a box has been clicked on*/
//* change function to check if O is in entered in square or and switch to x for next player turns*/

   
    /*added if statement to prevent changing letters once entered in box*/
    //*learned about ternary operator.  applying to this if statemnt*/
    /*This if statement checks to see if the square is not empty so that play may stop -DOES NOT WORK*/
    /*so next player can take a Take a turn*/
    // if(sqr.innertText != " "){
   
//    }
var thePlayer= "O"; 
    var win = false;
    // Set first player letter to 'O'
    function inthe(sqr) {
      
        
        if(sqr.innerText != "")
               return;
               sqr.innerText = thePlayer;
         /*if the square is not blank*/
         
    //*add check for whats currently in the box clcked. if its an o then switch to x for next user to play */
   /*else make it an O */
    // if(thePlayer == "O") {
    //     thePlayer = "X";
    // }/*simplified if statement using ternary opetator-if current player 'O', changed to 'X' otherwise set to 'O'*/
         
         thePlayer == "O" ? thePlayer = "X" : thePlayer = "O";
        
         fndThree();  /*make call to function to check for winners.  No parameters to pass*/
    }/*function that checks for 3 x'x or 3 o's in a row or colunmn*/
         //End function inthe()
         // else{
    //     thePlayer == "O";
    // }
 //*All comment grouped together for easier reading of code*/
    /*Find winner with 3 like squares* Test getElementById*/
    /*check squares to determine if three of them have same letter*/
     //var chckFirstSqr = document.getElementById("0_0");
        // alert(chckFirstSqr.innerText);  

        function fndThree(){
        //functionality added to count through each row on board till 3 of same letters(innerText) found in the row
         //functionality added to place if statements in function
         //simplified variable usage by passing the getElementId calls//
         //as arguments to the functions and removing variable names. w3 mentions using counter to get row. Code academy.  
         /*Find way to use it simplify checking rows for winner*/ /*Use Grid Garden as ref for coordinates*/
         /*******************ROWS***************************** */
             for(letterCnt = 0; letterCnt <= 2; letterCnt++){
                /*USE COUNTER TO LOOP THROUGH THE ROW FOR EACH SQUARE/BOX*3x*/
                var chckFirstSqrR = document.getElementById("0_" + letterCnt).innerText;/*was chckFirstSqrR*/
                var chckSecndSqrR = document.getElementById("1_" + letterCnt).innerText;/*was chckSecndSqrR */ 
                var chckThirdSqrR = document.getElementById("2_" + letterCnt).innerText;/*was chckThirdSqrR*/
                
                if(chckFirstSqrR == "")
                   continue;
                rowWins(chckFirstSqrR,chckSecndSqrR,chckThirdSqrR);
             }
             //Check COLUMNS for winner-find a way to use counter(w3)
             for(letterCnt = 0; letterCnt <= 2; letterCnt++){
                var chckFirstSqrC = document.getElementById(letterCnt + "_0").innerText;/*was chckFirstSqrC*/
                var chckSecndSqrC = document.getElementById(letterCnt + "_1").innerText;/*was chckSecndSqrC*/
                var chckThirdSqrC = document.getElementById(letterCnt + "_2").innerText; /*was chckThirdSqrC*/

                if(chckFirstSqrC == "")
                   continue;
                colWins(chckFirstSqrC,chckSecndSqrC,chckThirdSqrC);
             } 
             //Check Diagnolly for a winner
              
             //*check letters DIAGONALLY left to right for winner. don't forget counter as coordinate/W3 
             //change diagnol varibles to be able to use the row and colum function
            for(letterCnt = 0; letterCnt <= 2; letterCnt++){
              var chckFirstDiaLr = document.getElementById("0_0").innerText;/*was chckFirstDiaLr*/
              var chckSecndDiaLr = document.getElementById("1_1").innerText; /*was chckSecndDiaLr*/
              var chckThirdDiaLr = document.getElementById("2_2").innerText;/*was chckThirdDiaLr*/

              if(chckFirstDiaLr == "")
                    continue;
              
              }
              diagLrWins(chckFirstDiaLr,chckSecndDiaLr,chckThirdDiaLr); 
              //*check letters DIAGONALLY right to left for winner
            for(letterCnt = 0; letterCnt <= 2; letterCnt++){
               var chckFirstDiaRl = document.getElementById("2_0").innerText;/*was chckFirstDiaRl*/
               var chckSecndDiaRl = document.getElementById("1_1").innerText;/*was chckSecndDiaRl*/ 
               var chckThirdDiaRl = document.getElementById("0_2").innerText;/*was chckThirdDiaRl*/
              
               if(chckFirstDiaLr == "")
                   continue;
               
            } //End Diag cjecl
            diagRlWins(chckFirstDiaRl,chckSecndDiaRl,chckThirdDiaRl);  
        //  need to create function theWinner(chckFirstSqr,chckSecndSqr,chckThirdSqr) to combine if statemetns{
        //removed bracket

        //if no winner of the game, display picture of cat on screen-needs to cover entire game board//
        
         
        //****************Functions to check for Winner *//
            function rowWins(){
                if(chckFirstSqrR== chckSecndSqrR && chckFirstSqrR == chckThirdSqrR){
                    chckFirstSqrR = document.getElementById("0_" + letterCnt).innerText = "W";/*was chckFirstSqrR*/
                    chckSecndSqrR = document.getElementById("1_" + letterCnt).innerText = "W";/*was chckSecndSqrR*/ 
                    chckThirdSqrR = document.getElementById("2_" + letterCnt).innerText = "W";/*was chckThirdSqrR*/
                    alert("ROW WINS!!!!!");
                    win = true;
                    
                }
            }

            function colWins(){
                if(chckFirstSqrC== chckSecndSqrC && chckFirstSqrC == chckThirdSqrC){
                    
                    chckFirstSqrC = document.getElementById(letterCnt + "_0").innerText = "W";/*was chckFirstSqrC*/
                    chckSecndSqrC = document.getElementById(letterCnt + "_1").innerText = "W";/*was chckSecndSqrC*/ 
                    chckThirdSqrC = document.getElementById(letterCnt + "_2").innerText = "W";/*was chckThirdSqrC*/
                    alert("COLUMN WINS!!!!!");
                    win = true;
                }
                
            }

            function diagLrWins(){
                if(chckFirstDiaLr != "" && chckFirstDiaLr == chckSecndDiaLr && chckFirstDiaLr == chckThirdDiaLr){
                    chckFirstDiaLr = document.getElementById("0_0").innerText  = "W";/*was chckFirstDiaLr*/
                    chckSecndDiaLr = document.getElementById("1_1").innerText  = "W"; /*was chckSecndDiaLr*/
                    chckThirdDiaLr = document.getElementById("2_2").innerText  = "W";/*was chckThirdDiaLr*/                 
                     alert("DIAGNOL WINNER!!!!!");
                     win = true;
                    }
                    
                }

                function diagRlWins(){
                    if(chckFirstDiaRl != "" && chckFirstDiaRl == chckSecndDiaRl && chckFirstDiaRl == chckThirdDiaRl)
                        {
                        chckFirstDiaRl = document.getElementById("2_0").innerText  = "W";/*was chckFirstDiaRl*/
                        chckSecndDiaRl = document.getElementById("1_1").innerText  = "W";/*was chckSecndDiaRl*/ 
                        chckThirdDiaRl = document.getElementById("0_2").innerText  = "W";/*was chckThirdDiaRl*/
                         alert("DIAGNOL WINNER!!!!!");
                         win = true;}
                         else{
                            
                             noWinner();
                         
                         
                        }
                       console.log(win)
                    }
                        
            
              
            function noWinner(){
                
                 console.log("inside functinn noWinner")
                 if(win = false ){
                    chckFirstSqrR = document.getElementById("0_0").innerText = "D";/*was chckFirstSqrR*/
                    chckSecndSqrR = document.getElementById("1_0").innerText = "D";/*was chckSecndSqrR*/ 
                    chckThirdSqrR = document.getElementById("2_0").innerText = "D";/*was chckThirdSqrR*/
                    chckFirstSqrC = document.getElementById("0_1").innerText = "D";/*was chckFirstSqrC*/
                    chckFirstSqrC = document.getElementById("1_1").innerText = "D";/*was chckSecndSqrC*/ 
                    chckThirdSqrC = document.getElementById("2_1").innerText = "D";/*was chckThirdSqrC*/
                    chckFirstDiaRl = document.getElementById("0_2").innerText  = "D";/*was chckFirstDiaLr*/
                    chckFirstDiaRl = document.getElementById("1_2").innerText  = "D"; /*was chckSecndDiaLr*/
                    chckFirstDiaRl = document.getElementById("2_2").innerText  = "D";/*was chckThirdDiaLr*/ 
                    alert("NO WINNER");
                    
                   //    Display immage of cat over board  image.style.display = 'block';
                 }
            }    
            
        }
            // Issue: Game doesnt end with popup winner.  Need code to stop players from entering
            // letters after winner is proclaimed//
            //Center Game board on page
            //Extra-Change color of winning letters to red or flash and back to black or stable.*/
              
      