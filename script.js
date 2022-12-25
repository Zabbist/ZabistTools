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

function uploadImages() {
  // Get the file input element
  var fileInput = document.getElementById("file-input");
  var imageAddress = document.getElementById("image-addresses")
  imageAddress.value = " "

  // Get the selected files
  var files = fileInput.files;

  // Get the image container element
  var imageContainer = document.getElementById("image-container");

  // Clear the image container
  imageContainer.innerHTML = "";

  // Loop through the selected files
  for (var i = 0; i < files.length; i++) {
    // Get the current file
    var file = files[i];

    // Check if the file is an image
    if (file.type.match(/image.*/)) {
      // Create an image element
      var img = document.createElement("img");

      // Set the src of the image to a URL representing the file
      img.src = URL.createObjectURL(file);

      // Set the width and height of the image
      img.width = 100;
      img.height = 100;

      // Add the image to the image container
      imageContainer.appendChild(img);

      // Update the value of the image addresses input element
      imageAddress.value += img.src + " ";
    }
  }
}

function copyImageAddresses() {
  // Get the input element
  var imageAddressesInput = document.getElementById("image-addresses");

  // Select the input element's text
  imageAddressesInput.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Unselect the text
  imageAddressesInput.blur();
  imageAddressesInput.value = "Images Addresses copied to clipboard"
}


