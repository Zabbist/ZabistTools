function copyToClipboard() {
  const cameraView = [
    "headshot"
    "head and shoulders",
    "full body shot"
    "full length",
    "3/4 body shot",
    "1/2 body shot",
    "Shot from above",
    "higher angle",
    "Over the shoulder",
    "shoot from above, looking down at subject"
  ];
  const camView = cameraView[Math.floor(Math.random() * cameraView.length)];
   
  const generatePhoto = `${camView}`;
    
    
    navigator.clipboard.writeText(camView);
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
