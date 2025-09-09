/*
    REFERENCE - API

    https://www.alphavantage.co/documentation/

    NET ZERO ANALYSIS - 2 SAMPLES FOR 1 UNIT OF TIME ( daily close )

    Similar to flipping a coin, if it lands heads, is it more likely to land tales next?
    If it goes up one day, is it more likely to go down the next day
    if it goes down one day, is it more likely to go up the next day.  
*/

const analyze = require('./analyze');
const writeData = require('./analyze-writeData');


const symbol = 'AMZN';
const url = `https://alpha-vantage.p.rapidapi.com/query?symbol=${symbol}&outputsize=compact&function=TIME_SERIES_DAILY`;

async function fetchData() {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': '99f3569920msh82ee12231461d84p17ca0ejsnd2c2aeb4b7e4'
      }
    });
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const body = await res.json();
    const data = body['Time Series (Daily)'];
    extractCloseData(data);
    writeData(data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

function extractCloseData(data) {
  const arr = [];
  for (const day in data) {
    arr.push(data[day]['4. close']);
  }
  analyze(arr);
}

fetchData();
