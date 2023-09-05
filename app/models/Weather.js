

export class Weather {
    constructor(data) {
        this.city = data.name
        this.temperature = Math.round(((data.main.temp - 273.15) * 9) / 5 + 32)
        this.type = data.weather[0].description
        this.humidity = data.main.humidity
        this.celsius = false
    }

    get weatherTemplate() {
        return /*HTML*/`
        <button onclick="app.WeatherController.switchTemp()" class="justify-content-between text-center blurred text-light elevation-5 rounded mb-3 mx-3 p-2 row">
            <h1 class="col-12">${this.computedTemperature}</h1>
            <p class="col-12">condition: ${this.type}</p>
            <p class="col-12">humidity: ${this.humidity}%</p>
        </button>
        `
    }

    get computedTemperature() {
        if (this.celsius == false) {
            return `${this.temperature}° f`
        } else {
            return `${Math.round((this.temperature - 32) * 5 / 9)}° c`
        }
    }
}
