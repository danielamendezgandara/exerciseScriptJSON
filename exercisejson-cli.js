#!/usr/bin/env node

const fs=require('fs')

let values = JSON.parse(fs.readFileSync('values.JSON'));
let json = JSON.parse(fs.readFileSync('data.JSON'));
let result = {...json.data}

for (const key of Object.keys(json.data)) {
    for (const key2 of Object.keys(json.data[key])){
        if (key2.includes('over')) {
            json.data[key][key2.replace(key2,'over')] =values[json.data[key][key2]];
            delete json.data[key][key2];
        }else if (key2.includes('under')){
            json.data[key][key2.replace(key2,'under')] =values[json.data[key][key2]];
            delete json.data[key][key2];
        }
    }
}

console.log(result)



