export default class TestConfig {
    testType = 'word-count';
    value = 25;
    constructor(wordContainer) {
        this.wordContainer = wordContainer
    }
    settingsButtonPress() {
        document.getElementsByClassName('test-setting').addEventListener('click', console.log('hi')/*getData(settingsButton)*/);
        console.log('button press')
    }

    getData(button) {
        const type = button.getAttribute('testType');
        const value = button.getAttribute('value');
        console.log(type, value)
    }
    // setConfig(type, value) {
        
    // }
}
