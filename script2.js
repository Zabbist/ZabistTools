const cameraView = [
    "headshot",
    "head and shoulders",
    "full body shot",
    "full length",
    "3/4 body shot",
    "1/2 body shot",
    "Shot from above",
    "higher angle",
    "Over the shoulder",
    "shoot from above, looking down at subject"
];
const hairStyles = [
    "Long and straight",
    "Long and wavy",
    "Long and curly",
    "Medium length and straight",
    "Medium length and wavy",
    "Medium length and curly",
    "Bob",
    "Pixie cut",
    "Braided hairstyle",
    "Updo",
    "Half-up, half-down",
    "Bun",
    "Ponytail",
    "Fringe/bangs",
    "Dreadlocks"
];

function copyToClipboard() {
 
  const camView = cameraView[Math.floor(Math.random() * cameraView.length)];
  const photo = camView;

  
  navigator.clipboard.writeText(photo).then(function() {
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
