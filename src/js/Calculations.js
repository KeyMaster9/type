export default class Calculations {
    constructor(wordContainer, timer) {
        this.wordContainer = wordContainer;
        this.timer = timer;
    }
    getCorrectChars() {
        return this.wordContainer.countValidCharacters();
    }
    getTotalChars() {
        return this.wordContainer.countTotalCharacters();
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
        return (words * time);
    }
    runTrueWpmCalc() {
        console.log(`${this.relativeTime()}seconds  ${this.words()}words`)
        return this.masterCalc(this.words(), this.relativeTime())
    }
    runAccuracyCalc() {
        var accuracy = 100 / this.getTotalChars();
        return accuracy * this.getCorrectChars();
    }


}
