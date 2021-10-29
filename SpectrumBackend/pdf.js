const fs = require('fs')
const pdfparse = require('pdf-parse')

const pdffile = fs.readFileSync("CV.pdf")

const fetchPdf = () => {
pdfparse(pdffile).then((data) => {
    //console.log(data.numpages);
    //console.log(data.info);
     parsedData = data.text;
     console.log(parsedData);

})
}

module.exports = fetchPdf;