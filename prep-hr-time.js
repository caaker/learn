function timeConversion(s) {

  // retrieve all but last 2 characters ( the AM/PM )
  let no_meridian = s.slice(0, -2);
  console.log(no_meridian);

  // retrieve the last 2 characters
  let meridian = s.slice(-2);
  console.log(meridian);

  // retrieve first 2 characters ( the hour )
  let hour = s.slice(0, 2);
  console.log(hour);

  // retrieve all but first 2 characters
  let no_hour = no_meridian.slice(2);
  console.log(no_hour);

  // convert from string to int
  let hour_int = parseInt(hour);
  console.log(hour_int);

  if(meridian === 'AM') {
    if(hour_int === 12) {
      return '00' + no_hour;
    }
    return no_meridian;

  } else {
    if(hour_int === 12) {
      return no_meridian;
    }
    return (hour_int + 12) + no_hour;
  }
}

console.log(timeConversion('07:05:45PM')); // 19:05:45

