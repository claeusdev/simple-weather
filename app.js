const request = require('request')
const yargs = require('yargs')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Add address to fetch weather for as string',
            string: true //Takes boolean to allow yargs parge address as string.
        }
    })
    .help()
    .alias('help', 'h')
    .argv

const address = encodeURIComponent(argv.address)
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json: true
},(error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`Address: ${body.results[0].geometry.location.lat}`)
    console.log(`Address: ${body.results[0].geometry.location.lng}`)
})