// PYRAMID PATTERN
// OUTER LOOP REPRESNTS NUMBER OF LINES TO BE PRINTED
//INNER LOOP REPRESENTS NUMBER OF STARS TO BE PRINTED IN A SINGLE LINE

function printPyramid(rows) {
  for (var i = 1; i <= rows; i++) {
    // i represents no of rows
    var pattern = "";
    for (var j = 1; j <= i; j++) {
      // j represents no of stars
      // console.log(i,j);
      pattern += "*";
    }
    console.log(pattern);
  }
}
// printPyramid(10);
// console.log('------------------------------------');
// printPyramid(5);

// *  => 1 line 1 stars i x starts => 1 starts
// ** => 2 line 2 stars i x starts => 2 starts
// *** => 3 line 3 stars i x starts => 3 starts
// **** => 4 line  => 4 starts

function printPyramid2(rows) {
  for (var i = 1; i <= rows; i++) {
    var pattern = "";
    for (var j = 0; j < i; j++) {
      pattern += "*";
      //   pattern = pattern + '*';
    }
    console.log(pattern);
  }
}
// printPyramid2(5);

function printNumbersLeftPyramid(rows) {
  for (var i = 1; i <= rows; i++) {
    var pattern = "";
    for (var j = 1; j <= i; j++) {
      pattern += String(j);
      //   pattern += i;
    }
    console.log(pattern);
  }
}

//   printNumbersLeftPyramid(5);

// 1
// 22
// 333
// 4444
// 55555

// 1
// 12
// 123
// 1234
// 12345

// *
// **
// ***
// ****
// *****

//     *
//    **
//   ***
//  ****
// *****

//   *
//  **
// ***

//   1
//  22
// 333

//   1
//  12
// 123

function printStarRightPyramid(rows) {
    for (var i = 1; i <= rows; i++) {
      // PRINTS NUMBER OF LINES
      var pattern = "";
      for (var j = 1; j <= rows - i; j++) {
        // PRINTS SPACES IN EACH LINE
        pattern += " ";
      }
      for (var k = 1; k < i; k++) {
        // PRINTS STARTS IN EACH LINE
        pattern += "*";
      }
      console.log(pattern);
    }
  }
  // printStarRightPyramid(5);
  
  function printStarRightPyramidExperiment(rows) {
    for (var i = 1; i <= rows; i++) {
      // PRINTS NUMBER OF LINES
      var pattern = "";
      for (var j = 1; j <= rows; j++) {
        // PRINTS SPACES IN EACH LINE
        if (i + j - 1 < rows) {
          pattern += " ";
        } else {
          pattern += "*";
        }
      }
  
      console.log(pattern);
    }
  }
  
  // printStarRightPyramidExperiment(6);
  
  function printNumberRightPyramid(rows) {
    //   var outputArr = [];
    for (var i = 1; i <= rows; i++) {
      // PRINTS NUMBER OF LINES
      var pattern = "";
      for (var j = 1; j <= rows; j++) {
        // PRINTS SPACES IN EACH LINE
        if (i + j - 1 < rows) {
          pattern += " ";
        } else {
          pattern += i;
        }
      }
      // outputArr.push(pattern);
      console.log(pattern);
    }
    //   console.log(outputArr);
    //   for (var k = 0; k < outputArr.length; k++) {
    //     console.log(outputArr[k]);
    //   }
  }
  
  // printNumberRightPyramid(5);
  
  var pyramindUtils = {
    leftStars: printStarLeftPyramid,
    leftNumbers: printNumbersLeftPyramid,
    rightStars: printStarRightPyramid,
    rightNumbers: printNumberRightPyramid,
  };
  
  // console.log(pyramindUtils);
  
  // pyramindUtils.rightNumbers(5);
  
  // pyramindUtils.leftStars(3);
  // console.log(5);
  
  var message = "Welcome to JavaScript course";
  // console.log(message.split(" ").join(" "));
  
  // Write a program to check if a given string is a palindrome or not?
  // 'ABCBA'
  // 'RACECAR'
  
  function checkPalindrome() {
    var input = "RACECAR";
    input.split("").reverse().join("") === input
      ? console.log("It is a palindrome")
      : console.log("It is not a palindrome");
  }
  
  function findDuplicates() {
    var input = ["A", "B", "C", "B", "D", "E", "B", "D", "G", "A"];
    var uniques = [];
    var charOccurances = {};
    for (var i = 0; i < input.length; i++) {
      //   console.log(input[i]);
      var currentChar = input[i];
      if (uniques.includes(currentChar)) {
        // Duplicate element found
        console.log(`Duplicate Element found "${input[i]}"`);
      } else {
        // Not a duplicate element
        uniques.push(currentChar);
      }
      // -------------------------------------------
      // charOccurances['A'] = 1;
      // charOccurances.A = 1;
      if (charOccurances[currentChar]) {
        //If the key exists in object, increase its count by 1
        charOccurances[currentChar]++;
      } else {
        // Value does not exists in the object, set the key's value to 1
        charOccurances[currentChar] = 1;
      }
    }
    //   console.log(uniques);
    console.log(charOccurances);
  }
  
  findDuplicates();
  
  // Find the occurance of each character in a given array
