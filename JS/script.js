// nav
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
// Display User Information
var split1 = location.search.slice(1).split("&");
var name = split1[0].split("=")[1];
var email = split1[1].split("=")[1];

var h3 = document.createElement("h3");
var text = document.getElementById("text");
text.appendChild(h3);
h3.style.fontWeight = "400";
h3.innerText = decodeURIComponent(`Hi! ${name}`);

var h4 = document.createElement("h4");
var text = document.getElementById("text");
text.appendChild(h4);
h4.style.fontWeight = "lighter";
h4.innerText = decodeURIComponent(`${email}`);
