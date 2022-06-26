// used in arc.js
function makeAnchorHash(user_text) {

  // remove special characters from the URL/URI
  let ret = encodeURIComponent(user_text);

  // replace the URI encoding "character" with _
  ret = ret.replace(/%[0-9A-F]{2}/g, '_');

  // reduce any repeating underscores to a single underscore
  ret = ret.replace(/_{2,10}/g, '_');

  return ret;
};

// normally used for a single url component, but for test purposes, give it a url
console.log(makeAnchorHash('https://foo.com/test/again?var=foo#works'));
