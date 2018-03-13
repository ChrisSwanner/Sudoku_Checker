
import { ArrayBuilder, arrayCheck, Splitter, Check, colArrayBuilder, Sort } from './../src/sudokuChecker.js';

describe ("sudoku", function(){
  it ("should check an array for the numbers 1-9", function(){
    var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(Check(numberArray)).toEqual(true);
  })
})

describe ("arrayCheck", function(){
  it ("should return true", function(){

  var array = [[1,2,3],[1,2,3],[1,2,3]];
  var test = arrayCheck(array);

  expect(test).toEqual(true);
  })
})
