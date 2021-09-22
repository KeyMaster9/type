export default class ResultsRenderer {
    constructor(calculations) {
        this.calculations = calculations;

    }
    renderSequence() {
        var wpm = this.calculations.runTrueWpmCalc();
        var totalTime = this.calculations.calcSeconds();
        var correctWords = this.calculations.words();
        var correctChars = this.calculations.getCorrectChars();
        var displaySheet = `
        <div id="wpm" class="results-rendered">WPM: ${Math.round(wpm)}</div>
        <br/>
        <div id="total-time" class="results-rendered">Time: ${totalTime}s</div>
        <br/>
        <div id="correct-words" class="results-rendered">Correct words: ${correctWords}</div>
        <br/>
        <div id="correct-characters" class="results-rendered">Correct Characters: ${correctChars}</div>
        `;
        return displaySheet;
    }
    renderDisplay() {
        const main = document.getElementById('main');
        const main2 = document.getElementById('main2');
        main.style.display = 'none';
        main2.style.display = 'flex';
        main2.innerHTML =this.renderSequence();
        // calculations.getWordsPerMinute();

    }
}

