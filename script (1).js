function reverseText() {
  // Get the text from the input field
  var text = document.getElementById("text-input").value;

  // Reverse the text
  var reversedText = text.split("").reverse().join("");

  // Display the reversed text in the span element
  document.getElementById("reversed-text").innerHTML = reversedText;
}

function showReversedText() {
  // Get the reversed text from the span element
  var reversedText = document.getElementById("reversed-text").innerHTML;

  // Set the reversed text as the value of the input field
  document.getElementById("text-input").value = reversedText
