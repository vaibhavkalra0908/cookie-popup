const cross = document.querySelector("span");
const buttons = document.querySelectorAll("button");
const cookiePopUp = document.querySelector(".cookie-popup");

cross.addEventListener("click", function () {
  cookiePopUp.remove();
});

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    cookiePopUp.remove();
  });
});
