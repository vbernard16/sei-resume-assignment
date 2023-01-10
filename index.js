#! /usr/bin/env node

const fs = require('fs')
let colors = require('colors')

fs.readFile('./info.json', 'utf8', function(err, data) {
    if (err){
        console.log(err)
    }
    else{
        console.log(data)
        return data
    }
})

console.log('hey')