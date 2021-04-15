

//*this function needs to run only at beginning of original game on welcome page, after title shows and box is drawn and */

// function plan () {
//     alert("Determine who will go first by flip of a coin please-heads or tails!!");
//    // alert("ClIck corresponding button below !")//
// }
// plan();

//*function added to alert user when a box has been clicked on*/
//* change function to check if O is in entered in square or and switch to x for next player turns*/
var thePlayer= "O";
function inthe(sqr) {
    
    /*alert("You put a letter here!!");*/
    /*added if statement to prevent changing letters once entered in box*/
    //*learned about ternary operator.  applying to this if statemnt*/
    /*This if statement checks to see if the square is not empty so that play may stop -DOES NOT WORK*/
    /*so next player can take a Take a turn*/
    // if(sqr.innertText != " "){
   
//    }
              
   sqr.innerText = thePlayer; /*set square value to current player value of thePlayer -initally "O"*/
   console.log(sqr.innerText);
  /*if the square is not blank*/
    console.log("hello");
    
    
   //*add check for whats currently in the box clcked. if its an o then switch to x for next user to play */
   /*else make it an O */
    // if(thePlayer == "O") {
    //     thePlayer = "X";
      
    // }/*simplified if statement using ternary opetator-if current player 'O', changed to 'X' otherwise set to 'O'*/
    thePlayer == "O" ? thePlayer = "X" : thePlayer = "O";
    
    fndWinner();
             }

            
    // else{
    //     thePlayer == "O";
    // }
 //*All comment grouped together for easier reading of code*/
    /*Find winner with 3 like squares* Test getElementById*/
    /*check squares to determine if three of them have same letter*/
     //var chckFirstSqr = document.getElementById("0_0");
        // alert(chckFirstSqr.innerText);
        
     function fndWinner(){
                 var chckFirstSqr = document.getElementById("0_0").innerText;
                 var chckSecdSqr = document.getElementById("1_0").innerText; 
                 var chckThirdSqr = document.getElementById("2_0").innerText;
    /* make sure first box not empty before checking for winner- Doesn't work like expected*/
          //  if(chckFirstSqr == " "){

          //function to find 3 in a row by checking locating square,checking letter in square
        //and comparing 3 squares to see if equal and announce winner 
                if(chckFirstSqr == chckSecdSqr && chckFirstSqr == chckThirdSqr){
                alert(chckFirstSqr + " is" + " WIN!!!!!");
                // alert("WINNER!!!");
                }
           // }
        }







//*EXTRA-window prompt ask for players names and says hello at beginning of game but does it more than once-->
// function plyrs () {
// var plyr1 = window.prompt("Player 1-Please Enter your name: "); alert("Hello: " + plyr1);
// var plyr2 = window.prompt("Player 2-Please Enter your name: "); alert("Hello: " + plyr2);
// }
// plyrs();