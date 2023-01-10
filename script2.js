const colorList = ['red', 'green', 'blue', 'purple', 'pink'];

function copyToClipboard() {
  const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
  navigator.clipboard.writeText(randomColor).then(function() {
    /* clipboard successfully set */
    displayCopyMessage();
  }, function() {
    /* clipboard write failed */
    console.log("Clipboard write failed");
  });
}

function displayCopyMessage() {
  var copiedText = document.createElement("div");
  copiedText.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    background-color: lightgray;
    padding: 1em;
  `;
  copiedText.textContent = "Copied to clipboard!";
  document.body.appendChild(copiedText);

  setTimeout(() => {
    copiedText.remove();
  }, 2000);
}
