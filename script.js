// Array of emoji decimal Unicode codes
const emojiCodes = [
    128512, // Grinning face
    128514, // Face with tears of joy
    128525, // Smiling face with heart-eyes
    128526, // Smiling face with sunglasses
    128516, // Grinning face with smiling eyes
    128578, // Slightly smiling face
    129315, // Rolling on the floor laughing
    129392, // Smiling face with hearts
    128536, // Face blowing a kiss
    128151, // Two hearts
    127774, // Sun
    128049  // Cat
];

// Get the gallery container
const gallery = document.querySelector("#emoji-gallery");

// Function to display emojis
function showEmojis(count = emojiCodes.length) {

    // Clear the existing gallery
    gallery.innerHTML = "";

    // Loop through the first count emojis
    for (let i = 0; i < count; i++) {

        // Create a card
        const card = document.createElement("div");
        card.classList.add("emoji-card");

        // Create the emoji character
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");

        emoji.textContent = String.fromCodePoint(emojiCodes[i]);

        // Create the decimal code
        const code = document.createElement("p");
        code.classList.add("emoji-code");

        code.textContent = emojiCodes[i];

        // Add emoji and code to the card
        card.appendChild(emoji);
        card.appendChild(code);

        // Add the card to the gallery
        gallery.appendChild(card);
    }
}

// Display all emojis when the page loads
showEmojis();