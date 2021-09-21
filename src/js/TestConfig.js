export default class TestConfig {
    testType = 'word-count';
    onSettingsButtonPress(callback) {
        const settingButtons = [...document.getElementsByClassName('test-setting')];
        settingButtons.forEach((settingButtons) => settingButtons.addEventListener('click', () => {
            const value = +settingButtons.getAttribute('value');
            const type = settingButtons.getAttribute('testType');

            callback(type, value)
        }))
        // settingButton.addEventListener('click', console.log('hi')/*getData(settingsButton)*/);
        // console.log('button press')
    }
}
