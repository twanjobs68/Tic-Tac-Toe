

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
         //functionality added to count through each row on board till 3 of same letters(innerText) found in the row
            for(letterCnt = 0; letterCnt <= 2; letterCnt++){
                 var chckFirstSqr = document.getElementById("0_" + letterCnt).innerText;
                 var chckSecndSqr = document.getElementById("1_" + letterCnt).innerText; 
                 var chckThirdSqr = document.getElementById("2_" + letterCnt).innerText;
            }
                 for(letterCnt = 0; letterCnt <= 2; letterCnt++){
                     var chckFirstSqr = document.getElementById(letterCnt + "0_").innerText;
                    var chckSecndSqr = document.getElementById(letterCnt + "1_").innerText; 
                     var chckThirdSqr = document.getElementById(letterCnt + "2_").innerText;
                 }
                

                 if(chckFirstSqr == " ") {
                     continue;
                    }

    /* make sure first box not empty before checking for winner- Doesn't work like expected*/
          //  if(chckFirstSqr == " "){

         //function to find 3 in a row by checking locating square,checking letter in square
        //and comparing 3 squares to see if equal and announce winner 
                if(chckFirstSqr == chckSecndSqr && chckFirstSqr == chckThirdSqr){
                    /*Extra.  Instead of X wins, display player name and letter in parenthes "is Winner"*/
                    alert(chckFirstSqr + "s WIN!!!!!");
                     // alert("WINNER!!!");
                }
           
           //check letters diagnolly left to right then right to left for winner  
           var chckFirstDiaLr = document.getElementById("0_0").innerText;
           var chckSecndDiaLr = document.getElementById("1_1").innerText; 
           var chckThirdDiaLr = document.getElementById("2_2").innerText;
           if(chckFirstDiaLr != "" && chckFirstDiaLr == chckSecndDiaLr && chckFirstDiaLr == chckThirdDiaLr){
                alert(chckFirstDiaLr + "s WIN!!!!")
           }
            
           var chckFirstDiaRl = document.getElementById("0_2").innerText;
           var chckSecndDiaRl = document.getElementById("1_1").innerText; 
           var chckThirdDiaRl = document.getElementById("2_0").innerText;
           if(chckFirstDiaRl != "" && chckFirstDiaRl == chckSecndDiaRl && chckFirstDiaRl == chckThirdDiaRl){
                alert(chckFirstDiaRl + "s WIN!!!!")
           }
        }







//*EXTRA-window prompt ask for players names and says hello at beginning of game but does it more than once-->
// function plyrs () {
// var plyr1 = window.prompt("Player 1-Please Enter your name: "); alert("Hello: " + plyr1);
// var plyr2 = window.prompt("Player 2-Please Enter your name: "); alert("Hello: " + plyr2);
// }
// plyrs();
//Testing ForEach******
//input array of numbers
//output array numbers greater than 
///Test-Expect numbers GreterThan ten to equal 14,20,77
var counter = 0
var Array = []

function NumsIn(testNumbers) {
  testNumbers.forEach(number => {
    if (number > 10) {
      counter = number
      Array.push(counter)
    }
    return 0
  });
  console.log(Array)
}
NumsIn([77, 7, 14, 3, 20])