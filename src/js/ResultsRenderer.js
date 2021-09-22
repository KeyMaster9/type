export default class ResultsRenderer {
    constructor(calculations) {
        this.calculations = calculations;

    }
    renderSequence() {
        var wpm = this.calculations.runTrueWpmCalc();
        var totalTime = this.calculations.calcSeconds();
        var accuracy = this.calculations.runAccuracyCalc();
        var displaySheet = `
        <div id="wpm" class="results-rendered">WPM: ${Math.round(wpm)}</div>
        <br/>
        <div id="total-time" class="results-rendered">Time: ${totalTime.toFixed(1)}s</div>
        <br/>
        <div id="accuracy" class="results-rendered">Accuracy: ${accuracy.toFixed(1)}%</div>
        `;
        return displaySheet;
    }
}

