// Typewriter effect
const typewriterText = "Innovator | AI Enthusiast | Machine Learning Explorer";
const typewriterElement = document.querySelector(".typewriter");

let index = 0;
function typeWriter() {
  if (index < typewriterText.length) {
    typewriterElement.innerHTML += typewriterText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// 3D Logo animation placeholder
// Add Three.js code to animate the logo here.
