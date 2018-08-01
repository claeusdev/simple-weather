const request = require('request')

const geoCodeAddress = (encodedAddress, callback) => {
    const address = encodeURIComponent(encodedAddress)

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('not working well')
        } else if (body.status === 'ZERO_RESULTS') {
            callback('couldn\'t find that address')
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng

            })
        }
    })
}

module.exports.geoCodeAddress = geoCodeAddress