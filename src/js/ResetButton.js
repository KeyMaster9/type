export default class ResetButton {

    onResetButtonPress(callback) {
        const resetButton = document.getElementById('reset-button');
        console.log(resetButton)
        resetButton.addEventListener('click', () => {
            var reset = 'reset';
            callback(reset)
        })
    }
}