//Back-end
function buildEncryptArray(input, sideLength) {
  var encryptArray = [];
  for (var i = 0; i < input.length; i += sideLength) {
    var sideString = input.slice(i, i + sideLength);
    encryptArray.push(sideString);
  }
  return encryptArray;
}

function encrypt(input) {
  var result = input.replace(/\W*/gi, "");
  var square = Math.ceil(Math.sqrt(input.length));

  return result.toLowerCase();
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
