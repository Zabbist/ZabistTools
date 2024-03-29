function generatePhoto() {
  
  // Generate a random age between 18 and 40
  const age = Math.floor(Math.random() * (40 - 20 + 1)) + 20;

  // Generate a random camera view
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
  const camView = cameraView[Math.floor(Math.random() * cameraView.length)];

  // Generate a random hair style
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
  const hairStyle = hairStyles[Math.floor(Math.random() * hairStyles.length)];

  //Generate random hair color
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
  const hairColor = hairColorss[Math.floor(Math.random() * hairColors.length)];

  // Generate random eyes
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
  const eyeType = eyeTypes[Math.floor(Math.random() * eyeTypes.length)];

  // Generate random color eyes
  const eyeColors = [
    "green",
    "blue",
    "brown",
    "black"    
  ];
  const eyeColor = eyeColors[Math.floor(Math.random() * eyeColors.length)];

  //Generate a impersonation
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
    " Alek Wek",
    "Sara Sampaio"
  ];
  const modernModel = modernModels[Math.floor(Math.random() * modernModels.length)];

  //Generate random dress
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
  const dress = womenFashionOutfits[Math.floor(Math.random() * womenFashionOutfits.length)];

  //Generate a random dress color
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
  const dressColor = outfitColors[Math.floor(Math.random() * outfitColors.length)];

  //Generates random lighting
  const lightingTypes = [
  "camera flash",
  "Rembrandt lighting",
  "background lights",
  "studio strobes",
  "Fill",
  "main light",
  "butterfly lighting"
  ];
  const light = lightingTypes[Math.floor(Math.random() * lightingTypes.length)];

  
  // Generate the character prompt
  const characterPrompt = `${camView} of a ${age} year old woman with ${hairStyle} ${hairColor} hair, ${eyeType} ${eyeColor} eyes, impersonating ${modernModel}, wearing a ${dressColor} ${dress}, Nikon D850, ISO 100, f/2.8, 1/125, vivid colors, ${light}, colorful back drop`;

  // Copy the character prompt to the clipboard
  navigator.clipboard.writeText(characterPrompt);
}
