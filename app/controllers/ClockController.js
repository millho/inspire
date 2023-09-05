import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

function _drawTime() {
    let time = AppState.time
    setHTML('clock', time)
}

export class ClockController {
    constructor() {
        setInterval(this.getTime, 1000)
        AppState.on('time', _drawTime)
    }

    getTime() {
        let today = new Date();
        let hours = today.getHours()
        let minutes = today.getMinutes()
        if (hours > 12) {
            hours -= 12;
        } else { }
        AppState.time = hours + ':' + minutes
    }
}