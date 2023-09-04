

export class Weather {
    constructor(data) {
        this.city = data.name
        this.temperature = Math.round(((data.main.temp - 273.15) * 9) / 5 + 32)
        this.type = data.weather[0].description
        this.humidity = data.main.humidity
    }

    get weatherTemplate() {
        return /*HTML*/`
        <button onclick="app.WeatherController.switchTemp()" class="blurred elevation-5 rounded row">
            <i class="col-4 mdi mdi-white-balance-sunny"></i>
            <h5 class="col-8">${this.temperature}</h5>
            <p class="col-12">condition: ${this.type}</p>
            <p class="col-12">humidity: ${this.humidity}%</p>
        </button>
        `
    }
}