//Back-end
function normalizeInput(input,sideLength) {
  for (i = input.length; i < (sideLength * sideLength); i++) {
    input = input + " ";
  }
}

function buildEncrypted(input, sideLength) {
  var returnedString = "";
  var firstArray = [];
  var encryptArray = [];
  input = normalizeInput(input);

  for (var i = 0; i < input.length; i += sideLength) {
    var sideString = input.slice(i, i + sideLength);
    firstArray.push(sideString);
  }

  for (var i = 0; i < sideLength; i++) {
    var newString = "";
    for (var j = 0; j < sideLength; i++) {
      newString += firstArray[j].charAt(i);
    }
    encryptArray.push(newString);
  }

  for (var i = 0; i < encryptArray.length; i++) {
    returnedString += encryptArray[i];
  }

  return returnedString;
}

function encrypt(input) {
  var result = input.replace(/\W*/gi, "");
  var square = Math.ceil(Math.sqrt(input.length));
  final = buildEncrypted(result, square);

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
