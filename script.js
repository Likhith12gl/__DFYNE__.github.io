function countAnimation(targetNumber, elementId) {
  var currentNumber = 0;
  var increment = Math.ceil(targetNumber / 250);
  var intervalTime = 20;

  var interval = setInterval(function () {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
      clearInterval(interval);
      currentNumber = targetNumber;
    }
    document.getElementById(elementId).textContent = currentNumber.toLocaleString() + '+';
  }, intervalTime);
}

// Example usage
countAnimation(100000, 'count1');
countAnimation(150, 'count2');

const checkbox = document.querySelector("#hide_checkbox");
const body = document.body;
const gitLogo = document.getElementById("gitlogo");
const footerLogo = document.getElementById("footerLogo");
const topLogo = document.getElementById("topLogo");

function applyLightTheme() {
  body.classList.add("light");
  body.classList.remove("dark");
  gitLogo.src = "images/github-light.webp";
  footerLogo.src = "images/logo_dark.webp";
  topLogo.src = "images/logo_dark.webp";
}

function applyDarkTheme() {
  body.classList.add("dark");
  body.classList.remove("light");
  gitLogo.src = "images/github-dark.webp";
  footerLogo.src = "images/logo.webp";
  topLogo.src = "images/logo.webp";
}

// ✅ Always Set Light Theme on Page Load
document.addEventListener("DOMContentLoaded", () => {
  applyLightTheme(); // Force Light Theme every time a new page loads
  checkbox.checked = false; // Ensure checkbox is unchecked
});

// ✅ Toggle Theme (User Can Change, But Resets to Light on Refresh)
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    applyDarkTheme();
  } else {
    applyLightTheme();
  }
});
