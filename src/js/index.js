import RenderWords from './RenderWords';
import TimerRenderer from './TimerRenderer';
import WordGenerator from './WordGenerator';
import UserInput from './UserInput';
import Timer from './Timer';
import Calculations from './Calculations';
import CalculationsRenderer from './CalculationsRenderer';
import TestConfig from './TestConfig';


(function () {
    var wordGenerator = new WordGenerator();
    const renderer = new RenderWords(document.getElementById('typing-area'));

    const wordContainer = wordGenerator.generateWords();

    const testConfig = new TestConfig(wordContainer);
    const timer = new Timer();

    const calculator = new Calculations(wordContainer, timer);

    const timerRenderer = new TimerRenderer(document.getElementById('timer-display'), timer);
    var userInput = new UserInput(wordContainer, /*settingsConfig*/);

    const calculationsRenderer = new CalculationsRenderer(calculator);

    testConfig.settingsButtonPress();

    userInput.onInput(() => {
        if (!timer.hasStarted()) {
            timer.start();
            timerRenderer.startRenderering();
        }
        renderer.render(wordContainer);
    });

    userInput.onComplete(() => {
        timer.end();
        calculator.runTrueWpmCalc();
        timerRenderer.stopRenderering();

        calculationsRenderer.render();
    });

    userInput.start();

    renderer.render(wordContainer);
})();