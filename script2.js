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


const hairColors = [
    "Black",
    "Dark brown",
    "Medium brown",
    "Light brown",
    "Blonde",
    "Strawberry blonde",
    "Red",
    "Auburn",
    "Chestnut",
    "Burgundy",
    "Platinum blonde",
    "Silver",
    "Gray",
    "White",
    "Rainbow"
];


const eyeTypes = [
    "Round eyes",
    "Almond-shaped eyes",
    "Upturned eyes",
    "Downturned eyes",
    "Hooded eyes",
    "Deep-set eyes",
    "Wide-set eyes",
    "Close-set eyes",
    "Protruding eyes",
    "Prominent eyes",
    "Small eyes",
    "Large eyes",
    "Monolid eyes",
    "Double eyelid eyes",
    "Asymmetrical eyes"
];


const eyeColors = [
    "green",
    "blue",
    "brown",
    "black"
];


const modernModels = [
    "Gigi Hadid",
    "Kendall Jenner",
    "Bella Hadid",
    "Adut Akech",
    "Ashley Graham",
    "Gisele Bündchen",
    "Cindy Crawford",
    "Naomi Campbell",
    "Kendall Rae Knight",
    "Carla Bruni",
    "Liu Wen",
    "Candice Swanepoel",
    "Kirsten Owen",
    "Alek Wek",
    "Sara Sampaio"
];


const womenFashionOutfits = [
    "Little black dress",
    "Maxi dress",
    "Midi dress",
    "Wrap dress",
    "Bodycon dress",
    "Slip dress",
    "T-Shirt dress",
    "Shirt dress",
    "A-line dress",
    "Pencil dress",
    "Mermaid dress",
    "Pantsuit",
    "Jumpsuit",
    "Two-piece set",
    "Peplum top"
];


const outfitColors = [
    "Black",
    "White",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Pink",
    "Purple",
    "Orange",
    "Gold",
    "Silver",
    "Gray",
    "Brown",
    "Navy",
    "Maroon"
];


const lightingTypes = [
    "camera flash",
    "Rembrandt lighting",
    "background lights",
    "studio strobes",
    "Fill",
    "main light",
    "butterfly lighting"
];

function copyToClipboard() {
 
  const camView = cameraView[Math.floor(Math.random() * cameraView.length)];
  const age = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
  const hairStyle = hairStyles[Math.floor(Math.random() * hairStyles.length)];
  const hairColor = hairColorss[Math.floor(Math.random() * hairColors.length)];
  const eyeType = eyeTypes[Math.floor(Math.random() * eyeTypes.length)];
  const eyeColor = eyeColors[Math.floor(Math.random() * eyeColors.length)];
  const modernModel = modernModels[Math.floor(Math.random() * modernModels.length)];
  const dress = womenFashionOutfits[Math.floor(Math.random() * womenFashionOutfits.length)];
  const dressColor = outfitColors[Math.floor(Math.random() * outfitColors.length)];
  const light = lightingTypes[Math.floor(Math.random() * lightingTypes.length)];
  
  const photo = `${camView} of a ${age} year old woman with ${hairStyle} ${hairColor} hair, ${eyeType} ${eyeColor} eyes, impersonating ${modernModel}, wearing a ${dressColor} ${dress}, Nikon D850, ISO 100, f / 2.8, 1 / 125, vivid colors, ${light}, colorful back drop`;
  
    navigator.clipboard.writeText(photo);
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
