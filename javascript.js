const button = document.getElementById('image_button');
const skillsButton = document.getElementById('skill-button');
const educButton = document.getElementById('educ-button');
const educSection = document.getElementById('educ');
const skillsSection = document.getElementById('skills');

// toggle dark-mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const buttons = document.querySelectorAll('button');
  buttons.forEach(function(button) {
      button.classList.toggle('dark-mode');
  });
  button.style.opacity = '0';
  setTimeout(function() {
      if (button.src === "https://cdn-icons-png.flaticon.com/128/7645/7645197.png") {
          button.src = "https://cdn-icons-png.flaticon.com/128/11457/11457488.png";
      } else {
          button.src = "https://cdn-icons-png.flaticon.com/128/7645/7645197.png";
      }
      button.style.opacity = '1';
  }, 500);
}
//end here

// skills switch effect
skillsButton.addEventListener('click', function() {
    educSection.style.opacity = '0';
    educSection.style.transition = 'opacity var(--transition-delay3)';
    educSection.addEventListener('transitionend', function() {
        educSection.style.display = 'none';
        skillsSection.style.display = 'block';
        skillsSection.style.opacity = '1';
    }, { once: true }); 
});

// JavaScript
document.getElementById("skill-button").addEventListener("click", function() {
  this.classList.add("clicked");
  document.getElementById("educ-button").classList.remove("clicked");
  document.getElementById("educ-button").classList.add("no-underline");
});

document.getElementById("educ-button").addEventListener("click", function() {
  this.classList.add("clicked");
  document.getElementById("skill-button").classList.remove("clicked");
  document.getElementById("educ-button").classList.remove("no-underline");
});

educButton.addEventListener('click', function() {
    skillsSection.style.opacity = '0';
    skillsSection.style.transition = 'opacity var(--transition-delay3)';
    skillsSection.addEventListener('transitionend', function() {
        skillsSection.style.display = 'none';
        educSection.style.display = 'block';
        educSection.style.opacity = '1';
    }, { once: true });
});

// end here

// aside Go to Top
// let isScrolling;

// function scrollFunction() {
//   const asideButton = document.getElementsByTagName('aside')[0];

//   window.clearTimeout(isScrolling);

//   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//     asideButton.style.opacity = "1";
//     asideButton.style.transition = "opacity 0.2s ease-in-out";
//     asideButton.style.display = "block";

//     isScrolling = setTimeout(function() {
//       if (!asideButton.matches(':hover')) {
//         asideButton.style.opacity = "0";
//       }
//     }, 2000);
//   } else {
//     asideButton.style.opacity = "0";
//   }
// }

// window.onscroll = scrollFunction;

// const asideElement = document.getElementsByTagName('aside')[0];

// asideElement.addEventListener('mouseover', function() {
//   this.style.opacity = "1";
//   window.clearTimeout(isScrolling);
// });

// asideElement.addEventListener('mouseout', function() {
//   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
//     isScrolling = setTimeout(function() {
//       if (!asideElement.matches(':hover')) {
//         asideElement.style.opacity = "0";
//       }
//     }, 2000);
//   }
// });

// end here

function enlargeImage(imageId, buttonId) {
  var img = document.getElementById(imageId);
  var btn = document.getElementById(buttonId);
  img.style.transform = "scale(2)"; 
  img.style.transition = "var(--transition-delay2)";
  img.style.position = "fixed";
  img.style.left = "50%";
  img.style.top = "50%";
  img.style.transform = "translate(-50%, -50%) scale(10)";
  btn.style.display = "block"; 
}

function closeImage(imageId, buttonId) {
  var img = document.getElementById(imageId);
  var btn = document.getElementById(buttonId);
  img.style.transform = "";
  img.style.position = ""; 
  img.style.left = ""; 
  img.style.top = ""; 
  btn.style.display = "none"; 
}


// Send Message to Google Spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbxHN0RmjdD6dWME5bLy8pHd14Kb5Hr6SXcRtIxeEIwiAL_7pJkBKMew-dmRjqwG43NJ-g/exec'

const form = document.getElementById('form-message');

form.addEventListener('submit', e =>{
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => swal("Great!", "Your message is send successfully, Thank you!", "success"))
    .then(()=> {window.location.reload(); })
    .catch(error => swal("Error!", "Sorry for inconvient", "error"))
})


