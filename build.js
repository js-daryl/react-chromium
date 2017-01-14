const https = require('https');
const request = require('request');
const fs = require('fs');

request('https://atom.io/download/electron/index.json', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    const allElectronVersions = JSON.parse(body);
    const mapping = {};

    allElectronVersions.forEach(electron => {
      mapping[electron.version] = electron.chrome;
    });

    const printableMapping =  JSON.stringify(mapping)
                                .replace(/,/g, ",\n\t")
                                .replace(/{/g, "{\n\t")
                                .replace(/}/g, "\n}");

    fs.writeFile("index.js", 'module.exports = ' +printableMapping + ';', function (err) {
      if (err) {
        console.log(err);
      }
      console.log("New index.js generated and saved");
    });
  } else {
    console.log(error);
  }
})
