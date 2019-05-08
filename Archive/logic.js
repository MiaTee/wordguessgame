//National Parks Word Guess Game
//Author: MiaTee 


//Array to store national parks names
var gameWords = ["yosemite", "yellowstone", "acadia", "shenandoah", "halekala", "sequoia", "canyonlands"];

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


