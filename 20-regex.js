// start
const start =     '^';                   //                                                 start

// some
const protocol =  '(?:([A-Za-z]+):)?';   // 1                                               optional - does not capture the :
const slash =     '(?:\\/{0,3})';        //                                                 not captured
const domain =    '([0-9.\\-A-Za-z]+)';  // 2                                               required / captured


// optional / captured
const port =      '(?::(\\d+))?';        // 3 - does not capture the  :                     optional / captured
const path =      '(?:\\/([^?#]*))?';    // 4 - does not capture the  /                     optional / captured
const query =     '(?:\\?([^#]*))?';     // 5 - does not capture the  ?                     optional / captured
const hash =      '(?:#(.*))?';          // 6 - does not capture the  #                     optional / captured

// end
const end =       '$';                   //                                                 end

// concatenate and test the url against it using exec()
const whole = start + protocol + slash + domain + port + path + query + hash + end;
const regexp = new RegExp(whole, 'g');
const url = 'http://www.ora.com:80/goodparts?q#fragment';
const res = regexp.exec(url);

console.log(res);