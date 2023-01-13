function displayImage() {
  // Get the selected file from the input element
  const file = document.querySelector('#image-input').files[0];

  // Check if a file was selected
  if (file) {
    // Create a URL for the selected file
    const fileURL = URL.createObjectURL(file);

    // Update the src attribute of the image element
    document.querySelector('#image').src = fileURL;
  }
}

function cropAndDownload_TL() {
  // Get the image element
  const image = document.querySelector('#image');

  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 768;

  // Get the canvas context
  const ctx = canvas.getContext('2d');

  // Draw the top left quadrant of the image onto the canvas
  ctx.drawImage(image, 0, 0, 512, 768, 0, 0, 512, 768);

  // Get the data URL of the canvas
  const dataURL = canvas.toDataURL();

  // Create a blob from the data URL
  const blob = dataURItoBlob(dataURL);

  // Create a URL for the image
  const imageURL = URL.createObjectURL(blob);

  // Create an anchor element and set its href and download attributes
  const a = document.createElement('a');
  a.href = imageURL;
  a.download = 'top_left.png';

  // Trigger a click on the anchor element
  a.click();

  // Revoke the URL
  URL.revokeObjectURL(imageURL);
}
function cropAndDownload_TR() {
  // Get the image element
  const image = document.querySelector('#image');

  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;

  // Get the canvas context
  const ctx = canvas.getContext('2d');

  // Draw the top left quadrant of the image onto the canvas
  ctx.drawImage(image, 512, 0, 512, 768, 0, 0, 512, 768);

  // Get the data URL of the canvas
  const dataURL = canvas.toDataURL();

  // Create a blob from the data URL
  const blob = dataURItoBlob(dataURL);

  // Create a URL for the image
  const imageURL = URL.createObjectURL(blob);

  // Create an anchor element and set its href and download attributes
  const a = document.createElement('a');
  a.href = imageURL;
  a.download = 'top_left.png';

  // Trigger a click on the anchor element
  a.click();

  // Revoke the URL
  URL.revokeObjectURL(imageURL);
}
function cropAndDownload_BL() {
  // Get the image element
  const image = document.querySelector('#image');

  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;

  // Get the canvas context
  const ctx = canvas.getContext('2d');

  // Draw the top left quadrant of the image onto the canvas
  ctx.drawImage(image, 0, 512, 512, 768, 0, 0, 512, 768);

  // Get the data URL of the canvas
  const dataURL = canvas.toDataURL();

  // Create a blob from the data URL
  const blob = dataURItoBlob(dataURL);

  // Create a URL for the image
  const imageURL = URL.createObjectURL(blob);

  // Create an anchor element and set its href and download attributes
  const a = document.createElement('a');
  a.href = imageURL;
  a.download = 'top_left.png';

  // Trigger a click on the anchor element
  a.click();

  // Revoke the URL
  URL.revokeObjectURL(imageURL);
}
function cropAndDownload_BR() {
  // Get the image element
  const image = document.querySelector('#image');

  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;

  // Get the canvas context
  const ctx = canvas.getContext('2d');

  // Draw the top left quadrant of the image onto the canvas
  ctx.drawImage(image, 512, 768, 512, 512, 0, 0, 512, 768);


  // Get the data URL of the canvas
  const dataURL = canvas.toDataURL();

  // Create a blob from the data URL
  const blob = dataURItoBlob(dataURL);

  // Create a URL for the image
  const imageURL = URL.createObjectURL(blob);

  // Create an anchor element and set its href and download attributes
  const a = document.createElement('a');
  a.href = imageURL;
  a.download = 'top_left.png';

  // Trigger a click on the anchor element
  a.click();

  // Revoke the URL
  URL.revokeObjectURL(imageURL);
}

function dataURItoBlob(dataURI) {
  // Split the data URI into the data and the mime type
  const data = dataURI.split(',')[1];
  const mime = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // Convert the data to a typed array
  const array = Uint8Array.from(atob(data), function(c) {
    return c.charCodeAt(0);
  });

  // Create a blob from the typed array and mime type
  return new Blob([array], { type: mime });
}
