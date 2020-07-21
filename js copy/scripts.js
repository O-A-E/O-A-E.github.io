/*
- Used sticky header code, lines 6-25, from @link https://www.w3schools.com/howto/howto_js_sticky_header.asp
- Added to create an unexpected sticking effect
- After adding the parallax effect, I was able to better understand this code
- I used it because of its simplicity and conciseness
*/

// Carries out myFunction upon scrolling
window.onscroll = function () {
  myFunction();
};

// Access the header
var header = document.getElementById("logoHeader");

// Note the "offset" position of the header
var sticky = header.offsetTop;

// Header will stick and unstick at certain scroll points in the page 
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  }
  else {
    header.classList.remove("sticky");
  }
}

/* 
- Used code from lines 25-30 for parallax scroll effect code from @link https://youtu.be/hJTNCR75vc0
- Added to create an unexpected scrolling effect
- I used this code because I preferred the look of the scroll, compared to an easier code from W3.
- Some parts of this code were new to me (e.g., "translateY"), but I read up on each new element to gain more understanding. 
- See CSS:71 & CSS:88 for reference 
*/
window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax");
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = "translateY(" + scrollPosition * 0.4 + "px)"; // decimal number determines speed of scroll; lower = slower
});

// Assign variable name for the caret
const caretDown = document.getElementsByClassName("caretDown");

// Loop through the caretDown array to apply javascript variable name to every caretDown element
for (const element of caretDown) { //for of loop

  // Add an event listener to each HTML element inside!
  element.addEventListener("click", function () {
  }); // Could not sort out how to toggle between an up and down caret after several methods tried. I left as is and will come back to.
}

// Set variables for contact form, including errors and thank you message
const mailTo = document.querySelector("form");
const errorSwear = document.getElementById("errorMessageSwear");
const errorName = document.getElementById("errorMessageName");
const errorEmail = document.getElementById("errorMessageEmail");
const errorSubject = document.getElementById("errorMessageSubject");
const errorMessageBody = document.getElementById("errorMessageBody");
const thankYou = document.getElementById("thankYou");

// Create array for swear words to call on later
const swearWords = ["feldercarb", "frack", "skinjob", "vulgacarb"];

// Set submit button
let submitButton = document.getElementById("submitButton");

mailTo.addEventListener("submit", function (event) {
  event.preventDefault();

  // Create necessary variables for eventlisteners and error messages
  const name = document.getElementById("name").value.trim().toLowerCase();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const subject = document.getElementById("subject").value.trim().toLowerCase();
  const message = document.getElementById("message").value.trim().toLowerCase();


  let errorFlag = 1; // Flag of value 1 means true

  // Created my own code based on initial reading the following link which used flags: @link https://stackoverflow.com/questions/35554108/javascript-html5-array-search-and-return-from-html5-text-box-if-in-array
  // Create a for loop to search swearWords array by index positin
  for (i = 0; i < swearWords.length; i++) {
    if (name.includes(swearWords[i]) ||
      email.includes(swearWords[i]) ||
      subject.includes(swearWords[i]) ||
      message.includes(swearWords[i])) {
      errorFlag = 0;
      console.log(errorFlag);
    }
  }

  // Clear out error messages upon clicking submit
  errorName.innerText = "";
  errorEmail.innerText = "";
  errorSubject.innerText = "";
  errorMessageBody.innerText = "";
  errorSwear.innerText = "";

  // If the name input is empty, give error:
  if (name === "") {
    errorName.innerText = "Please enter your name.";
    errorFlag = 0;
  }
  // If the email input is empty, give error:
  if (email === "") {
    errorEmail.innerText = "Please enter an email.";
    errorFlag = 0;
  }
  // If the subject input is empty, give error:
  if (subject === "") {
    errorSubject.innerText = "Please enter a subject.";
    errorFlag = 0;
  }
  // If the message input is empty, give error:
  if (message === "") {
    errorMessageBody.innerText = "Please enter a message.";
    errorFlag = 0;
  }

  errorSwear.innerHTML = "Please remain professional and refrain from using Battlestar Galactica profanity. Thank you."

  if (errorFlag) {

    thankYou.innerHTML = "Thank you " + name + "!";
    // MailTo.setAttribute("action", "mailto:Osasenaga@ualberta.ca?subject=" + subject + "&body=" + message);
    window.location.href = "mailto:Osasenaga@ualberta.ca?subject=" + subject + "&body=" + message;
  }
});

// Animated slide down collapsible menu
/* - Code from this site @link https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_animate
   - Used for the effect I wanted, but was unsure of how to create a sliding down effect, instead of the hidden menus just appearing with a click.
   - Added an event listener to toggle the caret (tried to toggle caret up, but couldn't figure out the correct combination of code)
*/


let i;

for (i = 0; i < caretDown.length; i++) {
  caretDown[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let content = this.parentNode.nextElementSibling;
    content.classList.toggle("expanded");

  });
}

