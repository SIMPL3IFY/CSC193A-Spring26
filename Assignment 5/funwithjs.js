function bigger() {
  document.getElementById("textArea").style.fontSize = "24pt";
}

function fancify() {
  var area = document.getElementById("textArea");

  if (document.getElementById("fancy").checked) {
    area.style.fontWeight = "bold";
    area.style.color = "blue";
    area.style.textDecoration = "underline";
  } else {
    area.style.fontWeight = "normal";
    area.style.color = "black";
    area.style.textDecoration = "none";
  }
}

function moo() {
  var area = document.getElementById("textArea");
  var text = area.value.toUpperCase();

  // Split on ".", add "-MOO" to the last word of each sentence, rejoin
  var sentences = text.split(".");
  for (var i = 0; i < sentences.length; i++) {
    var trimmed = sentences[i].trim();
    if (trimmed.length > 0) {
      var words = trimmed.split(" ");
      words[words.length - 1] = words[words.length - 1] + "-MOO";
      sentences[i] = words.join(" ");
    }
  }
  area.value = sentences.join(".");
}