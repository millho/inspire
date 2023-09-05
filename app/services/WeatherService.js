import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"


class WeatherService {
    async getWeather() {
        const res = await api.get('/api/weather')
        AppState.dailyWeather = new Weather(res.data)
    }

    switchTemp() {
        AppState.dailyWeather.celsius = !AppState.dailyWeather.celsius
        AppState.emit('dailyWeather')
    }
}

export const weatherService = new WeatherService