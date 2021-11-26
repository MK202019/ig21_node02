const chalk = require('chalk')
const cities = require('cities')

console.log(chalk.bgRed('Hello YSE!!!'))
console.log(chalk.green('Hello YSE!!!'))

let lat = process.argv[2]
let lng = process.argv[3]

//const cities = require('cities')
if(lat && lng){
    console.log(cities.gps_lookup(lat,lng))
}