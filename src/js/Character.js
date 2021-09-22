export default class Character {
    userChar = null;
    active = false;

    constructor(char) {
        this.char = char;
    }

    getCharacter() {
        return this.char;
    }

    getUserCharacter() {
        return this.userChar;
    }

    hasUserCharacter() {
        return !!this.userChar;
    }

    setUserCharacter(userChar) {
        this.userChar = userChar;
    }

    clearUserCharacter() {
        this.userChar = null;
    }

    isValid() {
        return this.getCharacter() === this.getUserCharacter();
    }
    isInvalid() {
        return this.getCharacter() !== this.getUserCharacter();
    }

    setActive(bool = true) {
        this.active = bool;
        return this;
    }

    isActive() {
        return this.active;
    }

    getDisplayCharacter() {
        if (this.hasUserCharacter()) {
            return this.getUserCharacter();
        }

        return this.getCharacter();
    }

}
