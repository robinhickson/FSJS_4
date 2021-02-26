/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/*jshint esversion: 8*/


//Phrase constructor and methods
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
     * Method: add phrase placeholders for letters and display on game board
     */
    addPhraseToDisplay() {
        phraseString = Array.from(this.phrase);
        const spaceRegex = /\s/;
        const letterRegex = /[a-z]/;
        const letterArray = phraseString.forEach(char => {
            let listItem = document.createElement('li');
            if (spaceRegex.test(char)) {
                listItem.classList.add('hide', 'space');
            } else if (letterRegex.test(char)) {
                listItem.classList.add('hide', 'letter', `${char.toString()}`);
            }
            phrasePlace.firstElementChild.appendChild(listItem);
            listItem.textContent = char;
        });
        return letterArray;
    }

    /**
     * Method: checks if passed letter is in phrase and highlights chosen/wrong
     */
    checkLetter(game, keyValue, target) {
        if (phraseString.includes(keyValue)) {
            this.showMatchedLetter(keyValue, target);
            game.checkForWin();
        } else {
            if (target !== null && !target.classList.contains("wrong")) {
                target.classList.add("wrong");
                game.removeLife();
            } else if (!document.querySelector(`.${keyValue.toUpperCase()}Key`).classList.contains("wrong")) {
                document.querySelector(`.${keyValue.toUpperCase()}Key`).classList.add("wrong");
                game.removeLife();
            }
        }
    };
    /**
     *  Method: show letter if matching (contained in phrase string) 
     */
    showMatchedLetter(keyValue, target) {
        if (target !== null) {
            target.classList.add("chosen");
        } else {
            document.querySelector(`.${keyValue.toUpperCase()}Key`).classList.add("chosen");
        }
        let matchedClass = document.getElementsByClassName(keyValue);
        for (let i = 0; i < matchedClass.length; i++) {
            matchedClass[i].classList.add("show");
            matchedClass[i].classList.remove("hide");
        }
    };

};