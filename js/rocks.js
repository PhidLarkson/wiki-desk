// Get all the rocks with the class name "floating_ship"
const rocks = document.getElementsByClassName("floating_ship");

// Function to multiply and reposition the rocks
function multiplyAndRepositionRocks() {
    // Number of times to multiply the rocks
    const numberOfRocks = 5;

    // Loop through each rock
    for (let i = 0; i < rocks.length; i++) {
        // Clone the rock element
        for (let j = 0; j < numberOfRocks; j++) {
            const clonedRock = rocks[i].cloneNode(true);
            // Generate random positions for the cloned rocks
            const randomX = Math.floor(Math.random() * window.innerWidth);
            const randomY = Math.floor(Math.random() * window.innerHeight);
            // Set the position of the cloned rock
            clonedRock.style.position = "absolute";
            clonedRock.style.left = randomX + "px";
            clonedRock.style.top = randomY + "px";
            // Append the cloned rock to the document body
            document.body.appendChild(clonedRock);
        }
    }
}

// Call the function to multiply and reposition the rocks
multiplyAndRepositionRocks();