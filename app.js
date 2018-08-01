const yargs = require('yargs')
const geocode = require('./geocode/geocode')
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

geocode.geoCodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage)
    } else {
        console.log(JSON.stringify(results, undefined, 2))
    }
})
