export default class TimerRenderer {
    _timeout;
    _element;

    constructor(element, timer) {
        this._element = element;
        this._timer = timer;
    }

    startRenderering() {
        const renderFunc = () => {
            this.render();
            this._timeout = setTimeout(renderFunc, 100);
        }
        this._timeout = setTimeout(renderFunc, 100);
    }

    stopRenderering() {
        clearTimeout(this._timeout);
        this.clearTimerRender();
    }

    clearTimerRender() {
        this._element.innerHTML = '';
    }

    render() {
        const duration = this._timer.duration();
        this._element.innerHTML = Math.round(duration / 1000);
    }
}

