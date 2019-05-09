//National Parks Word Guess Game
//Author: MiaTee 

//Global Variables:
//Array to store national parks names
var gameWords = ["yosemite", "yellowstone", "acadia", "shenandoah", "halekala", "sequoia", "canyonlands"];



//Utility Functions:

//function to pick random word from the gameWords Array
function randomWord(gameWords)
{
 
 return gameWords[Math.floor(Math.random() * gameWords.length)];

}





//function to check if character in word 
function isCorrectGuess (word, letter) 

    {
       return word.includes(letter);
    }
   



//function to create a blank array "_" equals to the length of the word
function getBlanks(word)
{
    var blankArray = [];
    for (var i = 0; i < word.length ; i++)
    {
        blankArray.push("_")
    }
    return blankArray;
}


//function to fill blanks takes three args the word , array of current puzzle state and letter that is going to be filled
function fillBlanks(word, puzzleArray, letter)
{
for(var i = 0 ; i < word.length; i++)
{
    if (word.charAt(i) == letter)
    {
        puzzleArray[i] = letter;
    }
 
}
    return puzzleArray;
 
}


//Game Logic Functions

//1)- Function to setup the round that will take one argument the picked word and returns guesses left, wrong guesses and puzzle array
 function setupRound(word)
 {
    var roundObj = {
        guessesLeft: 9,
        word: word,
        wrongGuesses:[],
        puzzleState: getBlanks(word)

    }

  return roundObj;
 }



 //2)-Function to update round 

 function updateRound(roundObj, letter)
 { 
    if (isCorrectGuess(roundObj.word, letter))
    {
      roundObj.puzzleState =  fillBlanks(roundObj.word, roundObj.puzzleState, letter);
      
    }
    else{
        roundObj.guessesLeft = roundObj.guessesLeft - 1;
        roundObj.wrongGuesses = letter;
    }  
    
 }


//3) - Function to that checks if player won or not
function hasWon(array)
{
    for (var i = 0; i < array.length; i++) {
        if (array[i] === '_') {
            return false;
         } 
        }
        return true;


    
}



