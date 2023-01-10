const colorList = ['red', 'green', 'blue', 'purple', 'pink'];
const ageList = [ 10, 20, 30, 40]

function copyToClipboard() {
  const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
  const age = ageList[Math.floor(Math.random() * ageList.length)];
  const prompt = `Cor ${randomColor} e número ${age}`;
  
  navigator.clipboard.writeText(prompt).then(function() {
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
