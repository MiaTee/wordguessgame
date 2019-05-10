//National Parks Word Guess Game
//Author: MiaTee 

//Global Variables:
//Array to store national parks names
var gameWords = ["yosemite", "yellowstone", "acadia", "shenandoah", "halekala", "sequoia", "canyonlands"];
var myGame = setupGame(gameWords, 0 , 0);


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


//3) - Function to check if player won the game
function hasWon(array)
{
    for (var i = 0; i < array.length; i++) {
        if (array[i] === '_') {
            return false;
         } 
        }
        return true;
    
}

//4)- Function to check if player lost the game
function hasLost(guessesLeft)
{
    if(guessesLeft === 0)
    {
        return true;
    }
    return false;
}

//5)- Function to check if round if over
function isEndOfRound(roundObj)
{
    
   if (hasWon(roundObj.puzzleState) || roundObj.guessesLeft == 0)
   {
       return true;
   }
   return false;

}

//6) - Function to setup Game
 function setupGame (wordsArray, numberOfWins, numberOfLoses)
 {
    gameObj = {
        words: wordsArray,
        wins: numberOfWins,
        losses: numberOfLoses,
        round: setupRound(randomWord(wordsArray))
    };
 
     return gameObj;



 }
 //7) - Function to start a new round

 function startNewRound(gameObj)
 {
     //calling hasLost and hasWon functions to check if it returns true and use if statement
    if( hasWon(gameObj.round.puzzleState))
    {
        gameObj.wins++;
        alert("Congratulations!!  You won! " + gameObj.round.word);
        
    }
     else
     {
        alert("Sorry :( please try again :)" + gameObj.round.word);
        gameObj.losses++;

     }
    return gameObj;
    
    

 }









