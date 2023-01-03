function removeDuplicates() {
  // Get the input element and its value
  const inputElement = document.getElementById("input");
  let inputValue = inputElement.value;

  // Split the input value into an array of words or phrases
  let inputArray = inputValue.split(",");

  // Remove any leading or trailing whitespace from the array elements
  inputArray = inputArray.map(str => str.trim());

  // Create a Set from the array to remove any duplicates
  const uniqueElements = new Set(inputArray);

  // Convert the Set back to an array and join the elements with commas
  inputValue = Array.from(uniqueElements).join(", ");

  // Update the value of the input element
  inputElement.value = inputValue;
}

function saveToTXT() {
  // Get the input element and its value
  const inputElement = document.getElementById("input");
  let inputValue = inputElement.value;

  // Split the input value into an array of words or phrases
  let inputArray = inputValue.split(",");

  // Remove any leading or trailing whitespace from the array elements
  inputArray = inputArray.map(str => str.trim());

  // Join the array elements with a newline character
  inputValue = inputArray.join("\n");

  // Create a Blob object with the input value as its content
  const blob = new Blob([inputValue], {
    type: "text/plain"
  });

  // Create a link element
  const a = document.createElement("a");

  // Set the link's download attribute to a file name and add the Blob object as its href
  a.download = "words.txt";
  a.href




function loadFromJSON() {
  // Create a file input element
  const input = document.createElement("input");

  // Set its type to file and accept to JSON files
  input.type = "file";
  input.accept = ".json";

  // Add an event listener to the file input element to trigger the readFile function when a file is selected
  input.addEventListener("change", readFile);

  // Append the file input element to the document
  document.body.appendChild(input);

  // Click the file input element to open the file dialog
  input.click();

  // Remove the file input element from the document
  document.body.removeChild(input);
}

function readFile() {
  // Get the selected file
  const file = this.files[0];

  // Create a FileReader object
  const reader = new FileReader();

  // Add an event listener to the FileReader object to trigger the displayFileContent function when the file has been read
  reader.addEventListener("load", displayFileContent);

  // Read the file as text
  reader.readAsText(file);
}

function displayFileContent() {
  // Get the input element
  const inputElement = document.getElementById("input");

  // Parse the file content as JSON
  const fileContent = JSON.parse(this.result);

  // Get the words array from the file content
  const words = fileContent.words;

  // Join the array elements with commas
  const wordsString = words.join(", ");

  // Update the value of the input element
  inputElement.value = wordsString;
}

function generateNegativePrompt() {
  // Load the JSON file if it exists
  let data;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "words.json", true);
  xhr.onload = function(e) {
    if (this.status == 200) {
      // Parse the file content as JSON
      const fileContent = JSON.parse(this.response);

      // Get the words array from the file content
      const words = fileContent.words;

      // Check if there are enough words in the array
      if (words.length < 20) {
        alert("Error: Not enough words in the file. Please add more words to the file and try again.");
        return;
      }

      // Create an array to store the selected words
      const selectedWords = [];

      // Select 20 random words from the array
      for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        selectedWords.push(words[randomIndex]);
      }

      // Join the selected words with commas
      const selectedWordsString = selectedWords.join(", ");

      // Copy the selected words to the clipboard
      navigator.clipboard.writeText(selectedWordsString);
    }
  };
  xhr.send();
}


