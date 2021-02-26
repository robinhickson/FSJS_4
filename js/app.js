/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /*jshint esversion: 8*/



// Global variables
let phrasePlace = document.getElementById('phrase');
let phraseString = [];
const getTitle = document.querySelector('.title');
const getBtn__Reset = document.querySelector('#btn__reset');
const hideOverlay = document.getElementById('overlay');
const getKey = document.querySelector('#qwerty');
const getButtons = document.querySelectorAll('.key');
const livesHearts = document.getElementsByClassName('tries');
let gameOverMessage = document.getElementById('game-over-message');
let keyValue;

 //Init game

 const newGame = new Game();

 
//Listeners

const gameStartListener = getBtn__Reset.addEventListener('click',()=> {
    newGame.startGame();
    });

const onScreenKeyListener = getKey.addEventListener('click', (e)=>{
    if (e.target.classList.contains("key")){
        keyValue = e.target.textContent;
        newGame.handleInteraction(keyValue, e.target);
    }
});

const globalKeyboardListener = document.addEventListener('keypress', (f)=>{
        const keyboardRegex = /[^\R]?[a-z]/;
        if (keyboardRegex.test(f.key) && f.key !== "Enter"){
           keyValue = f.key;
           newGame.handleInteraction(keyValue, null);
        }
});

       


  
