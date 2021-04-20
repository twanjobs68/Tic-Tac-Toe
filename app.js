//*Game of Tic Tac Toe

// functions should check row, column, diagnolly(2 directions) and display "D" for "draw" game(no one gets 3 in a row)
//Winners letter should change to "W' for the 3 in a row achieved
//alert should flash for "Row Winner", "Column Winner" or "Diagnol Winner"
//Home page should not be interactive but contain link to go to game page(add picutes)
//Game page interactive 
//"Colorful game(maybe pictures)"

var thePlayer = "O";
var win = false;
// Set first player letter to 'O'
function inthe(sqr) {

    //*check to see if the square is not empty.  If its not then stop the fucntion to preven the letter for being changed*/
    if (sqr.innerText != "")
        return;
    sqr.innerText = thePlayer;
    /*if the square is not blank*/
    // }/*simplified if statement using ternary opetator-if current player 'O', changed to 'X' otherwise set to 'O'*/

    thePlayer == "O" ? thePlayer = "X" : thePlayer = "O";

    fndThree(); /*make call to function to check for winners.  No parameters to pass*/
} //end "in the square" function that sets initial letter to start all games to "O"

/*function that checks for 3 x'x or 3 o's in a row or colunmn or diagonally*/


//*All comment grouped together for easier reading of code*/
/*Find winner with 3 like squares* Test getElementById*/

function fndThree() {
    //functionality added to count through each (Coordinate) on board till 3 of same letters(innerText)//
    // found in the row

    /*******************ROWS***************************** */
    for (letterCnt = 0; letterCnt <= 2; letterCnt++) {
        /*USE COUNTER TO LOOP THROUGH THE ROW FOR EACH SQUARE/BOX*3x*/
        var chckFirstSqrR = document.getElementById("0_" + letterCnt).innerText; /*was chckFirstSqrR*/
        var chckSecndSqrR = document.getElementById("1_" + letterCnt).innerText; /*was chckSecndSqrR */
        var chckThirdSqrR = document.getElementById("2_" + letterCnt).innerText; /*was chckThirdSqrR*/

        if (chckFirstSqrR == "")
            continue;
        rowWins(chckFirstSqrR, chckSecndSqrR, chckThirdSqrR);
    }
    //Check COLUMNS for winner-find a way to use counter(w3)
    for (letterCnt = 0; letterCnt <= 2; letterCnt++) {
        var chckFirstSqrC = document.getElementById(letterCnt + "_0").innerText; /*was chckFirstSqrC*/
        var chckSecndSqrC = document.getElementById(letterCnt + "_1").innerText; /*was chckSecndSqrC*/
        var chckThirdSqrC = document.getElementById(letterCnt + "_2").innerText; /*was chckThirdSqrC*/

        if (chckFirstSqrC == "")
            continue;
        colWins(chckFirstSqrC, chckSecndSqrC, chckThirdSqrC);
    }
    //*****************Check Diagnolly for a winner************//

    //*check letters DIAGONALLY left to right for winner. don't forget counter as coordinate/W3 
    //change diagnol varibles to be able to use the row and colum function
    for (letterCnt = 0; letterCnt <= 2; letterCnt++) {
        var chckFirstDiaLr = document.getElementById("0_0").innerText; /*was chckFirstDiaLr*/
        var chckSecndDiaLr = document.getElementById("1_1").innerText; /*was chckSecndDiaLr*/
        var chckThirdDiaLr = document.getElementById("2_2").innerText; /*was chckThirdDiaLr*/

        if (chckFirstDiaLr == "")
            continue;

    }
    diagLrWins(chckFirstDiaLr, chckSecndDiaLr, chckThirdDiaLr);
    //*check letters DIAGONALLY right to left for winner
    for (letterCnt = 0; letterCnt <= 2; letterCnt++) {
        var chckFirstDiaRl = document.getElementById("2_0").innerText; /*was chckFirstDiaRl*/
        var chckSecndDiaRl = document.getElementById("1_1").innerText; /*was chckSecndDiaRl*/
        var chckThirdDiaRl = document.getElementById("0_2").innerText; /*was chckThirdDiaRl*/

        if (chckFirstDiaLr == "")
            continue;

    } //End Diag check
    diagRlWins(chckFirstDiaRl, chckSecndDiaRl, chckThirdDiaRl);
    //  need to create function theWinner(chckFirstSqr,chckSecndSqr,chckThirdSqr) to combine if statemetns{
    //removed bracket

    //////////////////////////////Doesn't work properly////////?????????///////////////////////////////////
    // // if no winner of the game, display picture of cat on screen-needs to cover entire game board//
    // for (letterCnt=0; letterCnt < 10; letterCnt++){
    //     chckFirstSqrR = document.getElementById("0_0").innerText = "D"; /*was chckFirstSqrR*/
    //     chckSecndSqrR = document.getElementById("1_0").innerText = "D"; /*was chckSecndSqrR*/
    //     chckThirdSqrR = document.getElementById("2_0").innerText = "D"; /*was chckThirdSqrR*/
    //     chckFirstSqrC = document.getElementById("0_1").innerText = "D"; /*was chckFirstSqrC*/
    //     chckFirstSqrC = document.getElementById("1_1").innerText = "D"; /*was chckSecndSqrC*/
    //     chckThirdSqrC = document.getElementById("2_1").innerText = "D"; /*was chckThirdSqrC*/
    //     chckFirstDiaRl = document.getElementById("0_2").innerText = "D"; /*was chckFirstDiaLr*/
    //     chckFirstDiaRl = document.getElementById("1_2").innerText = "D"; /*was chckSecndDiaLr*/
    //     chckFirstDiaRl = document.getElementById("2_2").innerText = "D"; /*was chckThir*/
    //     if (chckFirstDiaLr == "" && letterCnt >=9)
    //     continue;
    // }
    
    //  noWinner(win,chckFirstDiaRl,chckSecndDiaRl,chckThirdDiaRl,chckFirstSqrR,chckSecndSqrR,
    //          chckThirdSqrR,chckFirstSqrC,chckSecndSqrC,chckThirdSqrC);
    
      
    //****************Functions to check for Winner *//
    function rowWins() {
        if (chckFirstSqrR == chckSecndSqrR && chckFirstSqrR == chckThirdSqrR) {

            chckFirstSqrR = document.getElementById("0_" + letterCnt).innerText = "W"; /*was chckFirstSqrR*/
            chckSecndSqrR = document.getElementById("1_" + letterCnt).innerText = "W"; /*was chckSecndSqrR*/
            chckThirdSqrR = document.getElementById("2_" + letterCnt).innerText = "W"; /*was chckThirdSqrR*/
            alert("ROW WINS!!!!!");
            win = true;

        }

    }

    function colWins() {
        if (chckFirstSqrC == chckSecndSqrC && chckFirstSqrC == chckThirdSqrC) {

            chckFirstSqrC = document.getElementById(letterCnt + "_0").innerText = "W"; /*was chckFirstSqrC*/
            chckSecndSqrC = document.getElementById(letterCnt + "_1").innerText = "W"; /*was chckSecndSqrC*/
            chckThirdSqrC = document.getElementById(letterCnt + "_2").innerText = "W"; /*was chckThirdSqrC*/
            alert("COLUMN WINS!!!!!");
            win = true;
        }

    }

    function diagLrWins() {
        if (chckFirstDiaLr != "" && chckFirstDiaLr == chckSecndDiaLr && chckFirstDiaLr == chckThirdDiaLr) {
            chckFirstDiaLr = document.getElementById("0_0").innerText = "W"; /*was chckFirstDiaLr*/
            chckSecndDiaLr = document.getElementById("1_1").innerText = "W"; /*was chckSecndDiaLr*/
            chckThirdDiaLr = document.getElementById("2_2").innerText = "W"; /*was chckThirdDiaLr*/
            alert("DIAGNOL WINNER!!!!!");
            win = true;
        }

    }

    function diagRlWins() {
        if (chckFirstDiaRl != "" && chckFirstDiaRl == chckSecndDiaRl && chckFirstDiaRl == chckThirdDiaRl) {
            chckFirstDiaRl = document.getElementById("2_0").innerText = "W"; /*was chckFirstDiaRl*/
            chckSecndDiaRl = document.getElementById("1_1").innerText = "W"; /*was chckSecndDiaRl*/
            chckThirdDiaRl = document.getElementById("0_2").innerText = "W"; /*was chckThirdDiaRl*/
            alert("DIAGNOL WINNER!!!!!");
            win = true;
        }

    }



    function noWinner() {

        console.log("inside function noWinner")
        console.log(win)

        chckFirstSqrR = document.getElementById("0_0").innerText = "D"; /*was chckFirstSqrR*/
        chckSecndSqrR = document.getElementById("1_0").innerText = "D"; /*was chckSecndSqrR*/
        chckThirdSqrR = document.getElementById("2_0").innerText = "D"; /*was chckThirdSqrR*/
        chckFirstSqrC = document.getElementById("0_1").innerText = "D"; /*was chckFirstSqrC*/
        chckFirstSqrC = document.getElementById("1_1").innerText = "D"; /*was chckSecndSqrC*/
        chckThirdSqrC = document.getElementById("2_1").innerText = "D"; /*was chckThirdSqrC*/
        chckFirstDiaRl = document.getElementById("0_2").innerText = "D"; /*was chckFirstDiaLr*/
        chckFirstDiaRl = document.getElementById("1_2").innerText = "D"; /*was chckSecndDiaLr*/
        chckFirstDiaRl = document.getElementById("2_2").innerText = "D"; /*was chckThirdDiaLr*/
        alert("NO WINNER");

        //    Display immage of cat over board  image.style.display = 'block';

    }

}
    