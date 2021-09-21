export default class TestConfig {
    testType = 'word-count';
    value = 25;
    constructor(wordContainer) {
        this.wordContainer = wordContainer
    }  

    settingsButtonPress() {
        console.log(document.getElementsByClassName('test-setting'));
        const settingButtons = [...document.getElementsByClassName('test-setting')];
        settingButtons.forEach((settingButtons) => settingButtons.addEventListener('click', () => console.log('hi')))
        // settingButton.addEventListener('click', console.log('hi')/*getData(settingsButton)*/);
        // console.log('button press')
    }

    getData(button) {
        const type = button.getAttribute('testType');
        const value = button.getAttribute('value');
        console.log(type, value)
    }
    // setConfig(type, value) {
        
    // }
}
