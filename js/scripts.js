//Back-end
function normalizeInput(input,sideLength) {
  var result = "";
  for (i = input.length; i < Math.pow(sideLength, 2); i++) {
    result += " ";
  }
  result = input + result;
  return result;
}

function otherLoop(index, array) {
  var newString = "";
  array.forEach(function(item) {
    newString += item[index];
  });
  return newString;
}

function chop(string) {
  var newArray = [];
  var newString;
  for (i = 0; i < string.length; i+= 5) {
    newArray.push(string.slice(i, i+5));
  }
  newString = newArray.join(" ");
  return newString;
}

function buildEncrypted(input, sideLength) {
  var returnedString = "";
  var firstArray = [];
  var newString = "";
  input = normalizeInput(input, sideLength);
  for (var i = 0; i < input.length; i = i + sideLength) {
    var sideString = input.slice(i, i + sideLength);
    firstArray.push(sideString);
  }
  for (var i = 0; i < sideLength; i++) {
      newString += otherLoop(i, firstArray);
  }
  return newString;
}

function encrypt(input) {
  var result = input.replace(/\W*/gi, "");
  var square = Math.ceil(Math.sqrt(result.length));
  var encrypt = buildEncrypted(result, square).toLowerCase();
  var final = chop(encrypt);

  return final;
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
