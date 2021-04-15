

//*this function needs to run only at beginning of original game on welcome page, after title shows and box is drawn and */

// function plan () {
//     alert("Determine who will go first by flip of a coin please-heads or tails!!");
//    // alert("ClIck corresponding button below !")//
// }
// plan();

//*function added to alert user when a box has been clicked on*/
//* change function to check if O is in entered in square or and switch to x for next player turns*/
var thePlayer= "o";
function inthe(sqr) {

    /*alert("You put a letter here!!");*/
    /*added if statement to prevent changing letters once entered in box*/
    //*learned about ternary operator.  applying to this if statemnt*/
    /*This if statement checks to see if the square is not empty so that play may stop */
    /*so next player can take a Take a turn*/
   if(sqr.innertText != "") return;
   sqr.innerText = thePlayer;
   console.log(sqr.innerText);
   //*add check for whats currently in the box clcked. if its an o then switch to x for next user to play */
   /*else make it an o */
    // if(thePlayer == "o") {
    //     thePlayer = "x";
      
    // }/*simplified if statement using ternary opetator*/
    thePlayer == "o" ? thePlayer = "x" : thePlayer = "o";
    
    // else{
    //     thePlayer == "o";
    // }
}
//*window prompt ask for players names and says hello at beginning of game but does it more than once-->
// function plyrs () {
// var plyr1 = window.prompt("Player 1-Please Enter your name: "); alert("Hello: " + plyr1);
// var plyr2 = window.prompt("Player 2-Please Enter your name: "); alert("Hello: " + plyr2);
// }
// plyrs();