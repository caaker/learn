/*
 *
 * write data to a file
 *
*/

const fs = require('fs');

function writeData(data) {
  const FILE = 'analyze-data.txt';
  const writeStream = fs.createWriteStream(FILE);
  writeArray(writeStream, data);
  writeStream.on('finish', () => {
    console.log('Wrote  data to file: ' + FILE);
  });
  writeStream.end();
}


// update to use a string before writing
function writeArray(writeStream, data) {
  writeStream.write('const data = [');
  for (const day in data) {

    // daily close
    const close = data[day]['4. close'];

    // write the daily close to a file
    writeStream.write(close + ', ');
  }

  writeStream.write(']');
}

module.exports = writeData;
