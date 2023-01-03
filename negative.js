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

function saveToJSON() {
  // Get the input element and its value
  const inputElement = document.getElementById("input");
  const inputValue = inputElement.value;

  // Split the input value into an array of words or phrases
  const inputArray = inputValue.split(",");

  // Remove any leading or trailing whitespace from the array elements
  const cleanInputArray = inputArray.map(str => str.trim());

  // Convert the array to a JSON object
  const data = {
    words: cleanInputArray
  };

  // Stringify the JSON object
  const json = JSON.stringify(data);

  // Create a Blob object with the JSON string as its content
  const blob = new Blob([json], {
    type: "application/json"
  });

  // Create a link element
  const a = document.createElement("a");

  // Set the link's download attribute to a file name and add the Blob object as its href
  a.download = "words.json";
  a.href = URL.createObjectURL(blob);

  // Append the link element to the document
  document.body.appendChild(a);

  // Click the link to download the JSON file
  a.click();

  // Remove the link element from the document
  document.body.removeChild(a);
}

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

