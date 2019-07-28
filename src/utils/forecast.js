const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/5150b8c605e1617d474eccfe25bc114e/${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect with internet', undefined)
        } else if (body.error) {
            callback(`Unable to find location - ${body.error}`, undefined)
        } else {
            const currently = body.currently
            callback(undefined, `${body.daily.data[0].summary} It is currently ${currently.temperature}°F out. The high today is ${body.daily.data[0].temperatureHigh}°F with a low of ${body.daily.data[0].temperatureLow}°F. There is a ${currently.precipProbability * 100}% chance of rain.`)
        }
    })
}

module.exports = forecast