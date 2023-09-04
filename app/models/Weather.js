

export class Weather {
    constructor(data) {
        this.city = data.name
        this.temperature = data.main.temp
        this.type = data.weather[0].description
        this.humidity = data.main.humidity
    }

    get weatherTemplate() {
        return /*HTML*/`
        <h5>${this.temperature}</h5>`
    }
}