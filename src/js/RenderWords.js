export default class RenderWords {
    constructor(container) {
        this.container = container;
    }

    render(wordContainer) {

        var newContent = '';
        wordContainer.getWords().forEach(word => {
            newContent += this.renderWord(word);
        });
        this.container.innerHTML = newContent;
    }

    renderWord(word) {
        const classes = ['word'];
        if (word.isActive()) {
            classes.push('active')
        } else {
            classes.push('inactive')
        }
        if (word.isComplete()) {
            classes.push('complete');
        } else {
            classes.push('incomplete')
        }
        var newWord = `<div class="${classes.join(' ')}">`;
        word.getCharacters().forEach(character => {
            newWord += this.renderCharacter(character);
        });
        newWord += '</div>';
        return newWord;

    }

    renderCharacter(character) {
        const classes = ['letter'];

        if (character.isActive()) {
            classes.push('active');
        } else {
            classes.push('inactive');
        }

        if (character.hasUserCharacter()) {
            if (character.isValid()) {
                classes.push('valid');
            } else {
                classes.push('invalid');
            }
        }

        return `<div class="${classes.join(' ')}" >${character.getDisplayCharacter()}</div>`;
    }

}