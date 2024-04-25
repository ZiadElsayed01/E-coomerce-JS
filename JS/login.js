const form = document.getElementsByTagName("form")[0];
const username = document.getElementById("name");
const email = document.getElementById("email");
const btn = document.getElementById("btn");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");

form.addEventListener("submit", validation);
function validation(e) {
  console.log(nameValidation(e));
  console.log(emailValidation(e));
}

function nameValidation(e) {
  if (username.value === "") {
    e.preventDefault();
    error1.style.display = "block";
    error1.innerText = "field required*";
  } else if (isFinite(username.value)) {
    e.preventDefault();
    error1.style.display = "block";
    error1.innerText = "characters required*";
  } else {
    return username.value;
  }
}

const regExpemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var regexp = new RegExp(regExpemail);
function emailValidation(e) {
  if (email.value === "") {
    e.preventDefault();
    error2.style.display = "block";
    error2.innerText = "field required*";
  } else if (!regexp.test(email.value)) {
    e.preventDefault();
    error2.style.display = "block";
    error2.innerText = "This field require example@example.com*";
  } else {
    return email.value;
  }
}
