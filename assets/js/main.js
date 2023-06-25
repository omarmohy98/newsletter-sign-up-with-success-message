let formBtn = document.querySelector(`input[type="submit"]`);
let inputField = document.querySelector(`input[type="text"]`);
let label = document.querySelector("label span");
let subSec = document.querySelector(".subscrib-container");
let succSec = document.querySelector(".success-section");
let dissmisBtn = document.querySelector(".btn");
let validRegx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

inputField.addEventListener("input", function (e) {
  setInterval(() => {
    if (validRegx.test(inputField.value.trim())) {
      label.classList.remove("show");
      label.classList.add("hidden");
      inputField.classList.remove("not-valid");
    } else {
      inputField.classList.add("not-valid");
      label.classList.remove("hidden");
      label.classList.add("show");
    }
  });
});

formBtn.addEventListener("click", function (e) {
  let valid = false;
  if (validRegx.test(inputField.value.trim())) {
    valid = true;
    label.classList.remove("show");
    label.classList.add("hidden");
    inputField.classList.remove("not-valid");
    subSec.classList.add("hidden");
    succSec.classList.add("show");
    succSec.classList.remove("hidden");
  }
  if (valid === false) {
    inputField.classList.add("not-valid");
    label.classList.remove("hidden");
    label.classList.add("show");
    e.preventDefault();
  }
});

dissmisBtn.addEventListener("click", function () {
  subSec.classList.remove("hidden");
  succSec.classList.remove("show");
  succSec.classList.add("hidden");
});
