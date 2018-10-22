// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
//Returns an array-like object of all child elements which have all of the given class names.

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

var elementsWithClassName = [];

var findElementsWithClassName = function(element){
  if(element.classList && element.classList.contains(className)){
    elementsWithClassName.push(element);
  }
  for (var i = 0; i < element.childNodes.length; i++) {
      findElementsWithClassName(element.childNodes[i]);
    }

}

findElementsWithClassName(document.body);
return elementsWithClassName;
};
