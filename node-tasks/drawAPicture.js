const drawAPicture = (inputString) => {
  // array of letters showing up inside the string with their indexes as positions
  const items = [];
  // spliting  the input into array on every line end
  const arrInput = inputString.split("\n");
  // initial height of the paper rectangle
  let height = arrInput.length;
  //initial width of the paper rectangle
  let width = 0;
  for (let i = 0; i < arrInput.length; i++) {
    // finding out the letters, and their indexes and pushing them into items array
    for (let j = 0; j < arrInput[i].length; j++) {
      if (arrInput[i][j] != " ") {
        // recalculating the width of the paper
        width = arrInput[i].length > width ? arrInput[i].length : width;
        // pushing letter into items array
        items.push([arrInput[i][j], i, j]);
      }
    }
  }
  // sort the items array(array of letters and their indexes)
  items.sort();
  // creating our output array(multi-dimensional that will represent our paper filled with spaces ' ')
  let output = [];
  for (let i = 0; i < height; i++) {
    output[i] = [];
    for (let j = 0; j < width; j++) {
      output[i][j] = " ";
    }
  }

  // creating horizontal/vertical/diagonal lines using *
  for (let i = 0; i < items.length; i++) {
    // setting up the current letter row/col values(indexes)
    let currentLetterRow = items[i][1];
    let currentLetterCol = items[i][2];
    // converting current letter into *
    output[currentLetterRow][currentLetterCol] = "*";
    // set up the nextLetter row/col values, if index is on last letter, set up the next Letter to point towards the first letter
    if (i < items.length - 1) {
      nextLetterRow = items[i + 1][1];
      nextLetterCol = items[i + 1][2];
    } else {
      nextLetterRow = items[0][1];
      nextLetterCol = items[0][2];
    }
    // if the current and next letter are in the same row(creating horizontal line)
    if (currentLetterRow === nextLetterRow) {
      // depending if current letter col index is smaller/bigger than next letter col index populate elements between with *
      if (currentLetterCol < nextLetterCol) {
        for (let j = currentLetterCol + 1; j < nextLetterCol; j++) {
          output[currentLetterRow][j] = "*";
        }
      } else {
        for (j = currentLetterCol - 1; j >= nextLetterCol; j--) {
          output[currentLetterRow][j] = "*";
        }
      }
      // if the current and next letter are in the same column(creating vertical line)
    } else if (currentLetterCol === nextLetterCol) {
      if (currentLetterRow < nextLetterRow) {
        for (j = currentLetterRow + 1; j < nextLetterRow; j++) {
          output[j][currentLetterCol] = "*";
        }
      } else {
        for (j = currentLetterRow - 1; j >= nextLetterRow; j--) {
          output[j][currentLetterCol] = "*";
        }
      }
      // checking if letters are at the same diagonal
    } else if (
      Math.abs(currentLetterRow - nextLetterRow) ===
      Math.abs(currentLetterCol - nextLetterCol)
    ) {
      // if the current letter row index is smaller than next letter row index(current letter is 'above' next letter)
      if (currentLetterRow < nextLetterRow) {
        // if current letter column index is smaller than next letter column index(current letter is on the 'left' comparing to next letter)
        if (currentLetterCol < nextLetterCol) {
          for (let j = 1; j < nextLetterRow - currentLetterRow; j++) {
            output[currentLetterRow + j][currentLetterCol + j] = "*";
          }
          // if current letter column index is bigger than next letter column index(current letter is on the 'right' comparing to next letter)
        } else if (currentLetterCol > nextLetterCol) {
          for (let j = 1; j < nextLetterRow - currentLetterRow; j++) {
            output[currentLetterRow + j][currentLetterCol - j] = "*";
          }
        }
      }
      // if the current letter row index is bigger than next letter row index(current letter is 'bellow' next letter)
      if (currentLetterRow > nextLetterRow) {
        // if current letter column index is smaller than next letter column index(current letter is on the 'left' comparing to next letter)
        if (currentLetterCol < nextLetterCol) {
          for (j = 1; j < currentLetterRow - nextLetterRow; j++) {
            output[currentLetterRow - j][currentLetterCol + j] = "*";
          }
          // if the current letter column index isi bigger than next letter column index(current letter is on the 'right' comparing to next letter)
        } else if (currentLetterCol > nextLetterCol) {
          // dole desno - gore levo
          for (j = 1; j < currentLetterRow - nextLetterRow; j++) {
            output[currentLetterRow - j][currentLetterCol - j] = "*";
          }
        }
      }
    }
  }
  // final output string
  let outputString = "";
  // going through array and converting it into the string
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      outputString += output[i][j];
    }
    // adding end of the line after every 'row' inside array
    outputString += "\n";
  }
  console.log(outputString);
  return outputString;
};

// input string
const inputString = "a    b\ne\n\n\n\nd    c";
// 2nd input string
// const inputString = "   a\n  e\n\nd     b\n\n\n   c";
drawAPicture(inputString);
