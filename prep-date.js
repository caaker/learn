// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

function nextDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}

// Local time CDT / CST is 5 / 6 hours behind UTC
console.log(new Date('2022-04-06'))

// this refers to May and is UTC time
console.log(new Date(2022, 4, 6));
