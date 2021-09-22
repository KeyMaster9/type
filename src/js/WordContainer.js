
import defaultWords from '../json/defaultWords';
import Character from './Character';
import Word from './Word';

export default class WordContainer {

    getActiveWord() {
        var active = this.words.find(word => word.isActive());
        return active;
    }
    /////////////////////////////////////////////////////////////////////////
    activatePreviousWord() {
        const currentActive = this.getActiveWord();
        const index = this.words.indexOf(currentActive);

        var newActive = null;

        if (index > 0) {
            newActive = this.words[index - 1];
            currentActive.setActive(false);
            newActive.setActive(true);

        }
        return newActive;
    }
    //////////////////////////////////////////////
    activateNextWord() {
        const currentActive = this.getActiveWord();

        const index = this.words.indexOf(currentActive);

        const newActive = this.words[index + 1];

        if (newActive) {
            currentActive.setActive(false);
            newActive.setActive(true);
        }

        return newActive;
    }

    getWords() {
        return [...this.words];
    }

    isLastWord(word) {
        const index = this.words.indexOf(word);
        return index > -1 && this.words.length === index + 1
    }

    setWordComplete() {
        const current = this.getActiveWord();
        current.setComplete();
        return current;
    }

    isComplete(word) {
        console.log('cunt')
        return word.complete;

    }

    countCompleteWords() {
        const wordCount = this.words.length;
        var count = 0;
        for (let i = 0; i < wordCount; i++) {
            let currentWord = this.words[i];
            if (currentWord.isComplete()) {
                count++;
            }
        }
        return count;
    }
    countValidCharacters() {
        const numOfWords = this.countCompleteWords() + 1;

        const wordsArray = this.words;
        const spaces = this.countCompleteWords();
        var correctChar = spaces;

        for (let i = 0; i < numOfWords; i++) {
            correctChar = correctChar + wordsArray[i].countValidChars();
        }

        return correctChar;
    }
    countTotalCharacters() {
        const numOfWords = this.countCompleteWords() + 1;

        const wordsArray = this.words;
        const spaces = this.countCompleteWords();
        var totalChars = spaces;

        for (let i = 0; i < numOfWords; i++) {
            totalChars = totalChars + wordsArray[i].countFilledChars();
        }

        return totalChars;
    }


    wordPicker(wordChoice = defaultWords) {
        let maxVar = wordChoice.length;
        let selectedWord = Math.floor(Math.random() * maxVar);
        return wordChoice[selectedWord];
    }

    splitter(word) {
        let letters = []
        for (var i = 0; i !== word.length; i++) {
            letters.push(word.charAt(i))
        }
        return letters;
    }

    build(count = 25) {
        var words = [];
        var newWord = null
        var prevWord = null;
        for (let i = 0; i < count; i++) {

            const characters = [];

            do {
                newWord = this.wordPicker();

                if (newWord === prevWord) {
                    console.log('gotta do it again')
                }
            } while (newWord === prevWord)

            this.splitter(newWord).forEach((character) => {
                const char = new Character(character);
                characters.push(char);
            });

            const word = new Word(characters);
            words.push(word);

            prevWord = newWord;
        }

        this.words = words;
        if (words.length > 0) {
            words[0].setActive(true);
        }
    }
}