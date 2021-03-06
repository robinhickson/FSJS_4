/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/*jshint esversion: 8*/


// Game constructor and methods
class Game {
    constructor(missed = 0, phrases = [], activePhrase = null) {
        this.missed = missed;
        this.phrases = this.createPhrases();
        this.activePhrase = activePhrase;
    }

    // Method: hide start screen overlay, get random phrase, and set the active phrase
    startGame() {
        hideOverlay.style.display = 'none';
        hideOverlay.classList.remove('win');
        hideOverlay.classList.remove('lose');
        this.getRandomPhrase(this.createPhrases());
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Method: creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases() {
        const phrases = [
            new Phrase('live once'),
            new Phrase('walk on'),
            new Phrase('walking is the best medicine'),
            new Phrase('be swept away'),
            new Phrase('just step off'),
        ];
        return phrases;
    }

    /**
     * Method: selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase(phrases) {
        this.activePhrase = phrases[Math.floor((Math.random()) * this.phrases.length)];
        return this.activePhrase;
    }

    // Method: collect input, check letter and prevent multiple button selections
    handleInteraction(keyValue, target = null) {
        if (!this.activePhrase.checkLetter(keyValue)) {
            if (target !== null && !target.classList.contains("wrong")) {
                target.classList.add("wrong");
                this.removeLife();
            } else if (!document.querySelector(`.${keyValue.toUpperCase()}Key`).classList.contains("wrong")) {
                document.querySelector(`.${keyValue.toUpperCase()}Key`).classList.add("wrong");
                this.removeLife();
            }
        } else {
            this.activePhrase.showMatchedLetter(keyValue, target);
            this.checkForWin();
        };
        return;
    }

    // Method: remove life from scoreboard
    removeLife() {
        this.missed += 1;
        livesHearts[this.missed - 1].firstElementChild.setAttribute("src", "images/lostHeart.png");

        if (this.missed > 3) {
            livesHearts[livesHearts.length - 1].firstElementChild.setAttribute("src", "images/lastHeart.svg");
            livesHearts[livesHearts.length - 1].firstElementChild.classList.add("lastHeart");
            livesHearts[this.missed - 1].firstElementChild.setAttribute("src", "images/lostHeart.png");
        }
        if (this.missed > 4) {
            return this.gameOver();
        }
    }

    // Method: check for win
    checkForWin() {
        if (document.getElementsByClassName('hide letter').length === 0) {
            return this.gameOver();
        }
    }

    // Method: game over - display start screen overlay with message, and reset
    gameOver() {

        if (this.missed > 4) {
            gameOverMessage.textContent = "Take a walk!";
            hideOverlay.classList.add('lose');
        } else {
            gameOverMessage.textContent = "Taken in your stride!";
            hideOverlay.classList.add('win');
        }

        getTitle.textContent = this.activePhrase.phrase;
        getBtn__Reset.textContent = "Another Game?";
        //reset
        this.missed = 0;
        const resetHearts = Array.from(livesHearts);
        resetHearts.forEach(heart => {
            heart.firstElementChild.setAttribute("src", "images/liveHeart.png");
            heart.firstElementChild.setAttribute("class", "");
        });
        const resetKeys = Array.from(getButtons);
        resetKeys.forEach(key => {
            key.classList.remove('chosen', 'wrong');
        });
        hideOverlay.style.display = "inherit";
        const resetList = phrasePlace.firstElementChild;
        resetList.replaceChildren();

    }

}