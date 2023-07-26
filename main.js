
// -----------Scroll To Top ღილაკი------

let mybutton = document.getElementById("btn-back-to-top");

//ღილაკი გაჩნდება როცა სქროლი გაცდება 20px-ს
window.onscroll = function () {
  scrollFunction();
};

//ღილაკი გაქრობა-გაჩენის ფუნქცია
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//ღილაკი ასქროლავს 0px-ზე
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}