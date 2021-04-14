

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
    sqr.innerText = thePlayer;
    if(thePlayer == "O") {
        thePlayer = "X";
    }
    //*add check for O is not in box. means an x is played. play x and change for next user to have 'O' when played*//
    else{
        thePlayer == "O";
    }
}
function plyrs () {
var plyr1 = window.prompt("Player 1-Please Enter your name: "); alert("Hello: " + plyr1);
var plyr2 = window.prompt("Player 2-Please Enter your name: "); alert("Hello: " + plyr2);
}
plyrs();