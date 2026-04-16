const fs = require('fs');
const pdf = require('pdf-parse');
console.log(typeof pdf);
console.log(Object.keys(pdf));

let dataBuffer = fs.readFileSync('Famulan tarina .pdf');

try {
  let fn = typeof pdf === 'function' ? pdf : pdf.default;
  fn(dataBuffer).then(function(data) {
    console.log(data.text);
  }).catch(err => {
    console.error("Virhe: ", err);
  });
} catch(e) {
  console.log("Error calling pdf:", e);
}
