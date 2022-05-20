// original regex from crockford's book:
// const regex = /^(?:([A-Za-z]+):)?(?:\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

const start =     '^';                   //                                                 start
const protocol =  '(?:([A-Za-z]+):)?';   // 1                                               optional
const slash =     '(?:\\/{0,3})';        //                                                 not captured
const domain =    '([0-9.\\-A-Za-z]+)';  // 2                                               required / captured
const port =      '(?::(\\d+))?';        // 3 - does not capture the  :                     optional / captured
const path =      '(?:\\/([^?#]*))?';    // 4 - does not capture the  /                     optional / captured
const query =     '(?:\\?([^#]*))?';     // 5 - does not capture the  ?                     optional / captured
const hash =      '(?:#(.*))?';          // 6 - does not capture the  #                     optional / captured
const end =       '$';                   //                                                 end

// concatenate and test the url against it using exec()
const whole = start + protocol + slash + domain + port + path + query + hash + end;
const regexp = new RegExp(whole, 'g');
const url = 'http://www.ora.com:80/goodparts?q#fragment';
const res = regexp.exec(url);

console.log(res);