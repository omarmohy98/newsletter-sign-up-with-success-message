let formBtn = document.querySelector(`input[type="submit"]`);
let inputField = document.querySelector(`input[type="text"]`);
let label = document.querySelector("label span");
let subSec = document.querySelector(".subscrib-container");
let succSec = document.querySelector(".success-section");
let dissmisBtn = document.querySelector(".btn");

inputField.addEventListener("focus", function (e) {
  setInterval(function () {
    if (inputField.value.includes("@") && inputField.value.endsWith(".com")) {
      label.classList.remove("show");
      label.classList.add("hidden");
      inputField.classList.remove("not-valid");
    } else {
      inputField.classList.add("not-valid");
      label.classList.remove("hidden");
      label.classList.add("show");
    }
  }, 1);
});

formBtn.addEventListener("click", function (e) {
  let valid = false;
  if (inputField.value.includes("@") && inputField.value.endsWith(".com")) {
    valid = true;
    subSec.classList.add("hidden");
    succSec.classList.add("show");
    succSec.classList.remove("hidden");
  }
  if (valid === false) {
    e.preventDefault();
  }
});

dissmisBtn.addEventListener("click", function () {
  subSec.classList.remove("hidden");
  succSec.classList.remove("show");
  succSec.classList.add("hidden");
});
