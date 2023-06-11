class SetWeatherApi{
    #apiKey = '731cf233a8780fff61fc00a222365b4e'
    #weather // it'll store object from weather api
    constructor() {
    }
    set weather(value) {
        this.#weather = value;
    }

    getUrl(city , country) {
        // http://api.openweathermap.org/data/2.5/weather?q=bangkok,th&appid=***
        return `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.#apiKey}`;
    }

    get latitude() {
        return this.#weather.coord.lat
    }

    get longitude() {
        return this.#weather.coord.lon
    }
    get place() {
        return `${this.#weather.name} , ${this.#weather.sys.country}`
    }
    get temps() {
        return this.#weather.main.temp
    }

    get descript() {
        return this.#weather.weather[0].description
    }

    get currentDatetime() {
        /* weatherTimezone = `${new Date(weather.dt * 1000 - weather.timezone * 1000)}`;*/
        // console.log(new Date(this.#weather.dt*1000 - (this.#weather.timezone * 1000))) // minus
        // console.log(new Date(this.#weather.dt*1000 + (this.#weather.timezone * 1000))) // plus
        return (new Date(this.#weather.dt*1000 + (this.#weather.timezone * 1000)))
        // return `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()} at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    }

}
module.exports = SetWeatherApi