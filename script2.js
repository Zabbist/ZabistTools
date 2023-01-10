const colorList = ['red', 'green', 'blue', 'purple', 'pink'];

function copyToClipboard() {
  const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
  navigator.clipboard.writeText(randomColor).then(function() {
    /* clipboard successfully set */
  }, function() {
    /* clipboard write failed */
  });
}
