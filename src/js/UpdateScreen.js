export default class UpdateScreen {
    
    renderResultsDisplay(results) {
        this.hideElements()
        const main2 = document.getElementById('main2');
        main2.style.animation = 'unhide 1s 1';
        main2.style.display = 'flex';
        main2.innerHTML = results
        const buttonArea = document.getElementById('button-area');
        buttonArea.style.animation = 'unhide 1s 1';
        buttonArea.style.display = 'flex'; 
    }

    renderTestDisplay() {
        this.hideElements();
        setTimeout(() => {
            const main = document.getElementById('main');
             
            main.style.animation = 'unhide 1s 1';
            main.style.display = 'flex';    
            const buttonArea = document.getElementById('button-area');
            buttonArea.style.animation = 'unhide 1s 1';
            buttonArea.style.display = 'flex';  
        }, 0)
        
    }
    hideElements() {
        const main = document.getElementById('main');
        const main2 = document.getElementById('main2');
        const buttonArea = document.getElementById('button-area');
        buttonArea.style.display = 'none'
        main.style.display = 'none';
        main2.style.display = 'none';
    }
}