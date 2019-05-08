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

randomWord();



//function to check if character in word 
function isCorrectGuess (word, letter) 

    {
       return word.includes(letter);
    }
   

isCorrectGuess();


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

getBlanks();

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
fillBlanks();

//Game Logic Functions

//1)- Function to setup the round that will take one argument the picked word and returns guesses left, wrong guesses and puzzle array
 function setupRound(word)
 {
//     // word; pass word to the function
//     //guessesLeft: set guesses left to 9
//     //count wrong guess an array that will store wrong guess , start value is empty
// //     //puzzleState is an array with underscore values at the start
//      var wrongGuesses = [];
// //     var puzzleState = getBlank();
//      var guessesLeft = 9;
// //     var word = randomWord();
//     var puzzleState = puzzleArray;
    
    // var obj = {
    //     word: word,
    //     guessesLeft: guessesLeft,
    //     wrongGuesses: wrongGuesses,
    //     puzzleState = puzzleState
    // };
    var gameObj = {
        guessesLeft: 9,
        word: word,
        wrongGuesses:[],
        puzzleState:[]
    


    };

  return gameObj;
 }
 setupRound();