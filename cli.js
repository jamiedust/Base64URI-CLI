#! /usr/bin/env node

var fs = require('fs');
var mime = require('mime-types');
var cp = require('copy-paste');

var args = process.argv.slice(2);
var file = args[0];
var raw = (args.indexOf('-raw') !== -1) ? true : false;
var result;

function encode(file) {
    var img = fs.readFileSync(file);
    return new Buffer(img).toString('base64');
}

if ( !fs.existsSync(file) ) {

    console.log('The file does not seem to exist');
    process.exit(1);

} else {

    if( raw ) {
        result = encode(file);
    } else {
        result = 'data:' + mime.lookup(file) + ';base64,' + encode(file);
    }
    
    cp.copy(result, function() {
        console.log('Copied to clipboard');
        process.exit(0);
    });

}