const xButton = document.getElementById("clear-search");

function userSearch() {
// We got input from the textarea with the ID #user-search
const input = document.getElementById("user-search").value;
console.log(input);
  
  if (input.length !== 0) {
  // Window.location.href to redirect user towards google.com
  // I figured out this formula by conducting a google search, see which part of the link remains constant and replicating the search via the search bar.
  window.location.href = 'https://www.google.com/search?q=' + input;
  } else {
  // If search bar is empty, alert the user to enter a search term
    alert("Please enter a search term!")
  }
}
  /* Grab user input by ID, add an event listener(listens for an enter) and call the function
   like if you would've clicked google search. */
  document.getElementById("user-search").addEventListener("keydown", function(event) {
    // Event is an object with multiple properties, we are interested in the "key" property. Specifically the Enter key.
    if(event.key === "Enter") {
      // Prevents default behavior, in this case, it prevents the text to create an additional line when pressing enter.
      event.preventDefault();
      userSearch();
    }
  })

// Gets the #lucky-button
const luckyButton = document.getElementById('lucky-button');

// Gets a random phrase to display on the button
function randomPhrase() {
  // Array of phrases for the phrases pool
  let phrases = ['Happy', 'Adventerous', 'Sad', 'Jumpy', 'RoadtoHire']
  // Random number generator relative to the array length
  let randomIndex = Math.floor(Math.random() * phrases.length)
  // Returns the phrase at a random index
  let randomPhrase = phrases[randomIndex]
  // String concantenation to build the phrase
  luckyButton.textContent = "You are feeling " + randomPhrase
}

// Event listener listening to a mouseover/hover
luckyButton.addEventListener("mouseover", randomPhrase)

// Event listener listening for a keydown event when the user enters an input in the search bar
document.getElementById("user-search").addEventListener("keydown", function(event) {
  //If key is pressed, change xButton's display to block to make it visible
  if(event.key)
    xButton.style.display = "block";
})

// once xButton is clicked, clear search bar and hide xButton
function clearSearch() {
  document.getElementById("user-search").value = "";
  xButton.style.display = "none";
}      

/* 
  Things that I believe signifies my mastery in this project.
  
  1. I was able to create a function that takes in the user's input and reroute the user towards an actual search on google.com.
  - Users are able to press enter to search instead of being limited to clicking the Google Search button.

  2. How I implimented the clearSearch functionality to dynamically show the clear Button based on the user's actions.
  - Users are able to see the functioning clear button when they type in the search bar.

  3. My demonstration of parsing through an array, along with a random number generator to generate random phrases to display on the button with every hover.

  4. I was able to recreate the google homePage with extreme precision, this includes working links and specific hover effects.

  5. I was able to precisely explain my code and workflow with clear comments.

  I believe my performance in this project was in line of a person that understands the fundamentals of HTML, CSS, DOM manipulation and JavaScript practices.
  
  Thank you for your time, any feedback would be appreciated to uphold my continuous learning as well as to simulate CI/CD principles.
*/
