const greetingsDiv = document.getElementById('greetings');
const greetingsTexts = ["I AM TECHWIKIZEN", "I AM A DEVELOPER", "I AM A BLOGGER", "I AM A LEARNER", "I AM A TEACHER", "I AM AN ENVIRONMENTALIST"];
let currentGreetingIndex = 0;
let currentCharIndex = 0;
let isTypingReverse = false;

function typeGreetings() {
  const currentGreeting = greetingsTexts[currentGreetingIndex];
  const displayedText = currentGreeting.substring(0, currentCharIndex);
  greetingsDiv.textContent = displayedText;

  if (currentCharIndex === currentGreeting.length) {
    isTypingReverse = true;
    setTimeout(reverseTyping, 2000); // Wait for a second before reversing
  } else if (currentCharIndex === 0 && isTypingReverse) {
    isTypingReverse = false;
    currentGreetingIndex = (currentGreetingIndex + 1) % greetingsTexts.length;
    setTimeout(typeGreetings, 1000); // Wait for a second before typing the next greeting
  } else {
    currentCharIndex += isTypingReverse ? -1 : 1;
    setTimeout(typeGreetings, 100);
  }
}

function reverseTyping() {
  currentCharIndex -= 1;
  typeGreetings();
}

// Start the typing effect
setTimeout(typeGreetings, 1000);