export default class Calculations {
    constructor(wordContainer, timer) {
        this.wordContainer = wordContainer;
        this.timer = timer;
    }
    getCorrectChars() {
        return this.wordContainer.countValidCharacters();
    }
    calcSeconds() {
        return this.timer.duration() / 1000;
    }
    words() {
        console.log(this.getCorrectChars() / 5)
        return this.getCorrectChars() / 5;
    }
    relativeTime() {
        return 60 / this.calcSeconds();
    }
    masterCalc(words, time) {
        alert(`${words * time}wpm`);

        return;
    }
    runTrueWpmCalc() {
        console.log(`${this.relativeTime()}seconds  ${this.words()}words`)
        this.masterCalc(this.words(), this.relativeTime())
    }


}
