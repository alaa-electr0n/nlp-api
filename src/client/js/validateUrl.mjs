// validateURL.js
function validateURL(inputText) {
  console.log("::: Running validateURL :::", inputText);

  // Check if the input is a valid URL using a regex pattern
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?(www\\.)?([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}(:\\d+)?(\\/.*)?$"
  );

  // Return true for valid URLs or non-empty text
  return urlPattern.test(inputText);
}

module.exports = { validateURL };
