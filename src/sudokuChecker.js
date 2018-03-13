export function Check(array) {
  var i;
  var sortedArray = array.sort(function(a,b){
    return a - b;
  })
  for (i = 0; i < array.length; i++) {
    if (sortedArray[i] === (i + 1)){
      continue;
    } else {
      return false;
    }
  }
  return true;
}

export function arrayCheck(array) {
  var i;
  for (i = 0; i < array.length; i++) {
    if (Check(array[i]) === true) {
      continue;
    } else {
      return false;
  }
}
return true;
}

export function Splitter(number) {
  var numberArray = ("" + number).split("");
  var i;
  for (i = 0; i < numberArray.length; i++) {
    numberArray[i] = parseInt(numberArray[i]);

  }
  return numberArray;
}

export function colArrayBuilder(rowArray) {

  var col = [];
  var k;
	rowArray.forEach(function(k){
    col.push([]);
  });
	for (i = 0; i < rowArray.length; i++) {
    var i;
    var j;
  	var row = rowArray[i];
    for (j = 0; j < row.length; j++) {
      col[j].push(rowArray[i][j]);
    }
  }
  return col;
  }
