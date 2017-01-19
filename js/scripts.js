//Back-end

//Adds white space to increase string length to square number
function normalizeInput(input,sideLength) {
  var result = "";
  for (i = input.length; i < Math.pow(sideLength, 2); i++) {
    result += " ";
  }
  result = input + result;
  return result;
}

//Loops through an array logging letter at given index for every string in the array
function innerLoop(index, array) {
  var newString = "";
  array.forEach(function(item) {
    newString += item[index];
  });
  return newString;
}

//Slices final string into 5 letter "words"
function chop(string) {
  var newArray = buildArray(string, 5);
  var newString = newArray.join(" ");
  return newString;
}

//Builds a square array of a given side length from a given string
function buildArray(string, elementLength) {
  var array = [];
  for (var i = 0; i < string.length; i += elementLength) {
    array.push(string.slice(i, i + elementLength));
  }
  return array;
}

//Builds the encrypted string to be returned to user
function buildEncryptedString(input, sideLength) {
  input = normalizeInput(input, sideLength);
  var squareArray = buildArray(input, sideLength);
  var newString = "";

  for (var i = 0; i < sideLength; i++) {
      newString += innerLoop(i, squareArray);
  }
  return newString.replace(/\s*/gi, "");
}

//Formats user input and constructs encrypted result which it returns to the front-end
function encrypt(input) {
  var result = input.replace(/\W*/gi, "");
  var square = Math.ceil(Math.sqrt(result.length));
  var encrypt = buildEncryptedString(result, square).toLowerCase();
  var final = chop(encrypt);

  return final;
}

//Front-end
$(function() {
  $("#encryptor").submit(function(event) {
    event.preventDefault();

    var input = $("#encryptor textarea").val();
    var result = encrypt(input);

    $("#result").text(result);
  });
});
