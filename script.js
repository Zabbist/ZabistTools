function reverseText() {
  // Get the text from the input field
  var text = document.getElementById("text-input").value;

  // Reverse the text
  var reversedText = text.split("").reverse().join("");

  // Set the reversed text as the value of the input field
  document.getElementById("text-input").value = reversedText;
}

function copyInputText() {
  // Select the input field
  var input = document.getElementById("text-input");
  input.select();

  // Copy the text from the input field
  document.execCommand("copy");
}

