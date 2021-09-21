export default class UserInput {
    listeners = [];
    completeListeners = [];

    constructor(wordContainer) {
        this.wordContainer = wordContainer;
    }

    settingsButton
    activeWord() {
        const active = document.getElementsByClassName('active');
        return active;
    }

    start() {
        document.body.addEventListener('keydown', this._start);
    }

    _start = (e) => {
        this.eventHandler(e);
        this._runInputCallbacks();
    }

    onInput(callback) {
        this.listeners.push(callback);
    }

    _runInputCallbacks(e) {
        this.listeners.forEach(l => l(e));
    }

    onComplete(callback) {
        this.completeListeners.push(callback);
    }

    _complete() {
        document.body.removeEventListener('keydown', this._start);
        this._runCompleteCallbacks();
    }

    _runCompleteCallbacks(e) {
        this.completeListeners.forEach(l => l(e));
    }

    eventHandler = (e) => {

        if (e.code === 'Space') {
            e.preventDefault();
            this.wordContainer.setWordComplete();
            this.wordContainer.activateNextWord();
        } else if (e.code === 'Backspace') {
            const word = this.wordContainer.getActiveWord();

            const currentChar = word.getActiveCharacter();

            const isLastChar = word.isLastCharacter(currentChar);

            if (isLastChar && currentChar.hasUserCharacter()) {
                currentChar.clearUserCharacter();

            } else if (!isLastChar || (isLastChar && !currentChar.hasUserCharacter())) {

                const newActiveCharacter = word.activatePreviousCharacter();
                if (newActiveCharacter) {
                    newActiveCharacter.clearUserCharacter();
                }

                if (!newActiveCharacter) {
                    this.wordContainer.activatePreviousWord();
                }
            }
        } else if (e.code.substring(0, 3) == 'Key') {
            this.inputBuilder(e.key)
        }
    }

    inputBuilder(char) {
        const word = this.wordContainer.getActiveWord();
        const character = word.getActiveCharacter();
        character.setUserCharacter(char);
        const nextChar = word.activateNextCharacter();

        if (this.wordContainer.isLastWord(word) && !nextChar) {
            this._complete();
        }
    }

}

