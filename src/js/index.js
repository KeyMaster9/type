import RenderWords from './RenderWords';
import TimerRenderer from './TimerRenderer';
import UserInput from './UserInput';
import Timer from './Timer';
import Calculations from './Calculations';
import CalculationsRenderer from './CalculationsRenderer';
import TestConfig from './TestConfig';
import store from 'store';
import WordContainer from './WordContainer';



(function () {
    const renderer = new RenderWords(document.getElementById('typing-area'));

    const wordContainer = new WordContainer();
    wordContainer.build(store.get('word-count'));

    const testConfig = new TestConfig();


    const timer = new Timer();

    testConfig.onSettingsButtonPress((type, value) => {
        store.set('word-count', value);
        wordContainer.build(value);

        timer.end();
        timerRenderer.stopRenderering();
        renderer.render(wordContainer);

    });



    const calculator = new Calculations(wordContainer, timer);

    const timerRenderer = new TimerRenderer(document.getElementById('timer-display'), timer);
    var userInput = new UserInput(wordContainer, /*settingsConfig*/);

    const calculationsRenderer = new CalculationsRenderer(calculator);


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