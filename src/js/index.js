import RenderWords from './RenderWords';
import TimerRenderer from './TimerRenderer';
import UserInput from './UserInput';
import Timer from './Timer';
import Calculations from './Calculations';
import ResultsRenderer from './ResultsRenderer';
import TestConfig from './TestConfig';
import store from 'store';
import WordContainer from './WordContainer';
import ResetButton from './ResetButton';
import UpdateScreen from './UpdateScreen';
import MobileHandler from './MobileHandler';

(function () {
    const mobileHandler = new MobileHandler();
    var isMobileUser = mobileHandler.mobileCheck();
    const ogHeight = window.innerHeight;
    var heightWKeeb = null;
    if (isMobileUser) {
        ogHeight = window.innerHeight;
        mobileHandler.mobileFocus();
    }
    mobileHandler.onMobileRefocus(() => {
        if (isMobileUser) {
            mobileHandler.mobileFocus();
            if(heightWKeeb === null) {
                heightWKeeb = window.innerHeight;
            }

            console.log('refocused')
        }
    })

    const updateScreen = new UpdateScreen();
    const renderer = new RenderWords(document.getElementById('typing-area'));

    const wordContainer = new WordContainer();
    wordContainer.build(store.get('word-count'));

    const testConfig = new TestConfig();
    const timer = new Timer();
    const resetButton = new ResetButton();

    resetButton.onResetButtonPress((reset) => {
        if (reset == 'reset') {
            timer.end();
            timer.reset();
            wordContainer.build(store.get('word-count'));
            timerRenderer.stopRenderering();
            renderer.render(wordContainer); 
            updateScreen.renderTestDisplay(); 
            userInput.start();  
        }
        
    });
    
    testConfig.onSettingsButtonPress((type, value) => {
        store.set('word-count', value);
        wordContainer.build(value);

        timer.end();
        timer.reset();
        timerRenderer.stopRenderering();
        renderer.render(wordContainer);
        updateScreen.renderTestDisplay();
    });



    const calculator = new Calculations(wordContainer, timer);

    const timerRenderer = new TimerRenderer(document.getElementById('timer-display'), timer);
    var userInput = new UserInput(wordContainer, /*settingsConfig*/);

    const resultsRenderer = new ResultsRenderer(calculator);


    userInput.onInput(() => {
        if (!timer.hasStarted()) {
            timer.start();
            timerRenderer.startRenderering();
        }
        renderer.render(wordContainer);

        if (isMobileUser) {
            mobileHandler.mobileScroll(ogHeight, heightWKeeb);
        }
    });

    userInput.onComplete(() => {
        timer.end();
        timerRenderer.stopRenderering();
        var results = resultsRenderer.renderSequence();
        updateScreen.renderResultsDisplay(results);
    });
    updateScreen.renderTestDisplay();
    userInput.start();

    renderer.render(wordContainer);
})();