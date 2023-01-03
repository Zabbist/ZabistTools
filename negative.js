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
