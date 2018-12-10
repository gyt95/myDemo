/*
 * @Author: gary.kwan 
 * @Date: 2018-12-10 16:32:00 
 * @Last Modified by: gary.kwan
 * @Last Modified time: 2018-12-10 17:41:58
 */

const fs = require('fs'),
      path = require('path'),
      ImageModule=require('docxtemplater-image-module'),
      JSZip = require('jszip'),
      Docxtemplater = require('docxtemplater'),
      data = require('./data.json');

let opts = {}
opts.centered = false;
opts.getImage = function(tagValue, tagName) {
    return fs.readFileSync(tagValue);
}
opts.getSize = function(img, tagValue, tagName) {
    return [50,50];
}

let imageModule = new ImageModule(opts);

// Load the docx file as a binary
let content = fs.readFileSync(path.resolve(__dirname, 'loop-table.docx'), 'binary');

let zip = new JSZip(content);

let docx = new Docxtemplater()
    .attachModule(imageModule)
    .loadZip(zip);
    .setData(data); // Set the templateVariables

try {
    // Render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
    docx.render()
}
catch (error) {
    let e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties,
    }
    console.log(JSON.stringify({error: e}));
    // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
    throw error;
}

let buf = docx.getZip()
             .generate({type: 'nodebuffer'});

// buf is a nodejs buffer, you can either write it to a file or do anything else with it.
fs.writeFileSync(path.resolve(__dirname, 'output.docx'), buf);