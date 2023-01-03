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
