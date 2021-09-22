export default class Word {
    active = false;
    complete = false;

    constructor(characters = []) {
        this.characters = characters;
        if (characters.length > 0) {
            characters[0].setActive(true);
        }
    }

    getCharacters() {
        return [...this.characters];
    }

    setActive(bool = true) {
        this.active = bool;
        return this;
    }

    setComplete(bool = true) {
        this.complete = bool;
        return this;
    }

    isActive() {
        return this.active;
    }

    isComplete() {
        return this.complete;
    }

    getActiveCharacter() {
        var active = this.characters.find(character => character.isActive());
        return active;
    }

    activateNextCharacter() {
        const currentActive = this.getActiveCharacter();

        const index = this.characters.indexOf(currentActive);

        const newActive = this.characters[index + 1];

        if (newActive) {
            currentActive.setActive(false);
            newActive.setActive(true);
        }

        return newActive;
    }

    activatePreviousCharacter() {
        const currentActive = this.getActiveCharacter();
        const index = this.characters.indexOf(currentActive);
        var newActive = null;

        if (index > 0) {
            newActive = this.characters[index - 1];
            currentActive.setActive(false);
            newActive.setActive(true);

        }

        return newActive;
    }

    isLastCharacter(character) {
        const index = this.characters.indexOf(character);
        return index > -1 && this.characters.length === index + 1
    }

    countValidChars() {
        return this.characters.filter((char) => char.isValid()).length;
    }
    countFilledChars() {
        return this.characters.filter((char) => char.isValid() || char.isInvalid()).length;
    }
}

