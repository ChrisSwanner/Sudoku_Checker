describe ("sudoku", function(){
  it ("should check an array for the numbers 1-9", function(){
    var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var Check = function(array) {
      for (i = 0; i < array.length; i++) {
        if (array[i] === (i + 1)){
          continue;
        } else {
          return false;
        }
      }
      return true;
    }

    expect(Check(numberArray)).toEqual(true);

  })
})
