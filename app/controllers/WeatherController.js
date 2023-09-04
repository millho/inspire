import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawWeather() {
    debugger
    let dailyWeather = AppState.dailyWeather
    setHTML('weather', dailyWeather.weatherTemplate)
}

export class WeatherController {
    constructor() {
        AppState.on('account', this.getWeather)
        AppState.on('dailyWeather', _drawWeather)
    }
    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
        }
    }
}