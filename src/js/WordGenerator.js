import defaultWords from '../json/defaultWords';
import Character from './Character';
import Word from './Word';
import WordContainer from './WordContainer';

export default class WordGenerator {

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

    generateWords(count = 25) {
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




        return new WordContainer(words);
    }
}

