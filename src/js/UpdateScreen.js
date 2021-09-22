export default class UpdateScreen {
    
    renderResultsDisplay(results) {
        const main = document.getElementById('main');
        const main2 = document.getElementById('main2');
        main.style.display = 'none';
        main2.style.animation = 'unhide 1s 1';
        main2.style.display = 'flex';
        main2.innerHTML = results

    }
    renderTestDisplay() {
        const main = document.getElementById('main');
        const main2 = document.getElementById('main2');
        main2.style.display = 'none';
        main.style.animation = 'unhide 1s 1';
        main.style.display = 'flex';
    }
}