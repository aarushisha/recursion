// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
function putQuotesAround(obj) {
  return '"' + obj + '"';
}

function putBracketsAround(obj) {
  return '[' + obj + ']';
}

function putCurlyBracesAround(obj) {
  return '{' + obj + '}';
}

var stringifyJSON = function(obj) {
  var type = typeof(obj);
  if (type === 'number' || type === 'boolean' || obj === null) {
    return '' + obj;
  } else if (type === 'string') {
    return putQuotesAround(obj);
  } else if (type === 'object') {
  	if (Array.isArray(obj)) { 
  	  var arr = [];
      for (var i = 0; i < obj.length; i++) {
        arr.push(stringifyJSON(obj[i]));
      }
      return putBracketsAround(arr.join(','));
  	} else { 
  	  var objects = [];
      for (var key in obj) {
        if (key !== 'undefined' && key !== 'functions') {
          var keyValPair = [];
         keyValPair.push(putQuotesAround(key));
         keyValPair.push(stringifyJSON(obj[key]));
         objects.push(keyValPair.join(':'));
        }
      }
      return putCurlyBracesAround(objects);
  	}
    
  } else if (type === 'function' || type === 'undefined') {
    return '';
  }
};