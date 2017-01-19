//Back-end
function normalizeInput(input,sideLength) {
  var result = "";
  console.log("sideLength: " + sideLength);
  for (i = input.length; i < Math.pow(sideLength, 2); i++) {
    result += " ";
  }
  result = input + result;
  console.log(result + "!");
  console.log(input.length);
  return result;
}

function otherLoop(index, array) {
  var newString = "";
  array.forEach(function(item) {
    newString += item[index];
  });
  return newString;
}

function buildEncrypted(input, sideLength) {
  var returnedString = "";
  var firstArray = [];
  var newString = "";
  input = normalizeInput(input, sideLength);
  console.log(input + "!");

  for (var i = 0; i < input.length; i = i + sideLength) {
    var sideString = input.slice(i, i + sideLength);
    console.log("loop " + i + ": " + sideString);
    firstArray.push(sideString);
  }
  console.log(firstArray);

  for (var i = 0; i < sideLength; i++) {
      newString += otherLoop(i, firstArray);
  }
  return newString;
}

function encrypt(input) {
  var result = input.replace(/\W*/gi, "");
  var square = Math.ceil(Math.sqrt(result.length));
  var final = buildEncrypted(result, square);

  return final.toLowerCase();
}

//Front-end
$(function() {
  $("#encryptor").submit(function(event) {
    event.preventDefault();

    var input = $("#encryptor input").val();
    var result = encrypt(input);

    $("#result").text(result);
  });
});
