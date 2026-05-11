(function() {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    console.log("Window loaded!");
    document.getElementById("encrypt-it").addEventListener("click", handleClick);
    document.getElementById("reset").addEventListener("click", handleReset);
  }

  function handleClick() {
    console.log("Button clicked!");
    const input = document.getElementById("input-text").value;
    document.getElementById("result").textContent = shiftCipher(input);
  }

  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < "a" || text[i] > "z") {
        result += text[i];
      } else if (text[i] === "z") {
        result += "a";
      } else {
        result += String.fromCharCode(text.charCodeAt(i) + 1);
      }
    }
    return result;
  }
})();
