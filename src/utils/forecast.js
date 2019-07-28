const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/5150b8c605e1617d474eccfe25bc114e/${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('chuja tam, neta nie masz gościu', undefined)
        } else if (body.error) {
            callback(`Unable to find location - ${body.error}`, undefined)
        } else {
            const currently = body.currently
            callback(undefined, `${body.daily.data[0].summary} It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast