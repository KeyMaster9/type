export default class Timer {
    _start;
    _end;

    start() {
        this._start = new Date();
    }

    hasStarted() {
        return !!this._start;
    }

    end() {
        this._end = new Date();
    }

    reset() {
        this._start = null;
        this._end = null;
    }

    duration() {
        if (!this._start) {
            throw new Error('Timer not started');
        }

        var end = this._end || new Date();

        return end.getTime() - this._start.getTime();
    }
}

