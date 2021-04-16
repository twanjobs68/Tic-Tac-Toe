

//*this function needs to run only at beginning of original game on welcome page, after title shows and box is drawn and */

// function plan () {
//     alert("Determine who will go first by flip of a coin please-heads or tails!!");
//    // alert("ClIck corresponding button below !")//
// }
// plan();

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
  function inthe(sqr) {
           
            if( sqr.innerText != "" || win) {
                return;
            }
         sqr.innerText = thePlayer; /*set square value to current player value of thePlayer -initally "O"*/
           /*if the square is not blank*/
         
    //*add check for whats currently in the box clcked. if its an o then switch to x for next user to play */
   /*else make it an O */
    // if(thePlayer == "O") {
    //     thePlayer = "X";
    // }/*simplified if statement using ternary opetator-if current player 'O', changed to 'X' otherwise set to 'O'*/
    thePlayer == "O" ? thePlayer = "X" : thePlayer = "O";

    fndThree(); /*function that checks for 3 x'x or 3 o's in a row or colunmn*/
     }
             
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
         //as arguments to the functions and removing variable names.
           for(letterCnt = 0; letterCnt <= 2; letterCnt++){
                theWinner(document.getElementById("0_" + letterCnt).innerText,/*was chckFirstSqrR*/
                 document.getElementById("1_" + letterCnt).innerText,/*was chckSecndSqrR*/
                 document.getElementById("2_" + letterCnt).innerText); /*was chckThirdSqrR*/
     
            //     if(chckFirstSqrR == " "){
            //         continue;
            //      }
            //     // theWinner(chckFirstSqrR,chckSecndSqrR,chckThirdSqrR)
        
            //      }
            // }     
            
         //functionality added to count through each column on board till 3 of same letters(innerText) found in the column     
            // for(letterCnt = 0; letterCnt <= 2; letterCnt++){
               theWinner(document.getElementById(letterCnt + "_0").innerText,/*was hckFirstSqrC*/
                      document.getElementById(letterCnt + "_1").innerText,/*was chckSecndSqrC */ 
                      document.getElementById(letterCnt + "_2").innerText);/*was chckThirdSqrC*/
           } 
       /* tried to use continue, break and return as read in w3 schools.//
    //  Need to understand how they work better. This continue does not work to check column empty*/
    //  if(chckFirstSqr == " ") continue;{}
    //     }
    //* make sure first box not empty before checking for winner- Doesn't work like expected*/
    //  if(chckFirstSqr == " "){

    //function to find 3 in a row by checking locating square,checking letter in square
    //and comparing 3 squares to see if equal and announce winner 
                // if(chckFirstSqrC == " "){
                //          continue;
                //      }
                    //  theWinner(chckFirstSqrC,chckSecndSqrC,chckThirdSqrC)                  
                //  }
        
              
    //check letters diagnolly left to right then right to left for winner  
            theWinner(document.getElementById("0_0").innerText,/*was chckFirstDiaL*/
                      document.getElementById("1_1").innerText, /*was chckSecndDiaLr*/
                      document.getElementById("2_2").innerText);/*was chckThirdDiaLr*/
    
            // if(chckFirstDiaLr != "" && chckFirstDiaLr == chckSecndDiaLr && chckFirstDiaLr == chckThirdDiaLr){
            //      alert(chckFirstDiaLr + "DiagLr  WIN!!!!")
            // }
        
            theWinner(document.getElementById("0_2").innerText,/*was chckFirstDiaRl*/
                     document.getElementById("1_1").innerText,/*was chckSecndDiaRl*/ 
                     document.getElementById("2_0").innerText);/*was chckThirdDiaRl*/
            // if(chckFirstDiaLr != "" && chckFirstDiaRl == chckSecndDiaRl && chckFirstDiaRl == chckThirdDiaRl){
            //      alert(chckFirstDiaRl + "DiagRl WIN!!!!")
                 }
            
        

        function theWinner(chckFirstSqr,chckSecndSqr,chckThirdSqr){
            if(chckFirstSqr != " " && chckFirstSqr == chckSecndSqr && chckFirstSqr == chckThirdSqr){
                /*Extra.  Instead of X wins, display player name and letter in parenthes "is Winner"*/
                    alert(chckFirstSqr + "row WIN!!!!!");
                    win = true;
                }
        }
// *EXTRA-window prompt ask for players names and says hello at beginning of game but does it more than once-->
// function plyrs () {
// var plyr1 = window.prompt("Player 1-Please Enter your name: "); alert("Hello: " + plyr1);
// var plyr2 = window.prompt("Player 2-Please Enter your name: "); alert("Hello: " + plyr2);
// 
