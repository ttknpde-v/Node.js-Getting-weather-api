const serviceRest = require('../service/service-rest')
const setWeatherApi = require('../modules/set-weather-api')

const ServiceRest = new serviceRest()
let SetWeatherApi = new setWeatherApi()

let request = ServiceRest.request
let express = ServiceRest.express
let bodyParser = ServiceRest.bodyParser
/* setting for request Json body  */
let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.post('/api/weather' , function (req , res) {
    let {city , country} = req.body
    let url = SetWeatherApi.getUrl(city,country)
    request(url , function (err, response, body) {
        SetWeatherApi.weather = JSON.parse(body)
        if (!err) {
            res.status(202).json({
                latitude:SetWeatherApi.latitude ,
                longitude:SetWeatherApi.longitude ,
                place:SetWeatherApi.place ,
                temp:SetWeatherApi.temps ,
                description:SetWeatherApi.descript,
                datetime:SetWeatherApi.currentDatetime
            })
        }
        else  {
            throw err
        }
    })
}).listen(3000 , function (err) {
    if (!err) console.log('service in port 3000')
    else throw err
})

