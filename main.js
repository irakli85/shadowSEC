
// -----------Scroll To Top ღილაკი------

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

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

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ---------------------------------------------------
// burger menu

const close = document.getElementById('close');
const menuBar = document.getElementById('menu');
const menuBtn = document.getElementById('menuBtn');

function openMenu(){
    menuBar.classList.add('active');    
}

function closeMenu(){
    menuBar.classList.remove('active'); 
}

close.addEventListener("click", closeMenu);
menuBtn.addEventListener("click", openMenu);



