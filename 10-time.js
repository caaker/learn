function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

function nextDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}

// this refers to November and is UTC time
console.log(new Date('2018-11-02'))


// this refers to December and is local time, -5 or -6 (DST), for Texas
// sign is missing, month has obo bug
console.log(new Date(2018, 11, 2));