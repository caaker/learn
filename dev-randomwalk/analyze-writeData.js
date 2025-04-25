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

function writeArray(writeStream, data) {
  writeStream.write('const data = [');
  for (const day in data) {
    const close = data[day]['4. close'];
    writeStream.write(close + ', ');
  }
  writeStream.write(']');
}

module.exports = writeData;
