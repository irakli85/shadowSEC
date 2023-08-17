// -----------Scroll To Top ღილაკი------

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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

const close = document.getElementById("close");
const menuBar = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");

function openMenu() {
  menuBar.classList.add("active");
}

function closeMenu() {
  menuBar.classList.remove("active");
}

close.addEventListener("click", closeMenu);
menuBtn.addEventListener("click", openMenu);

//----------------------------------------------------
// read more

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var rdMore = document.getElementById("readMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    rdMore.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    rdMore.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//------------------// swiper for team

// var teamSwiper = new Swiper(".mySwiper2", {
//   slidesPerView: 3,
//   loop: true,
//   autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//   },
//   navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//       // when window width is >= 320px
//       320: {
//           slidesPerView: 1,
//       },
//       // when window width is >= 480px
//       480: {
//           slidesPerView: 1,
//       },
//       // when window width is >= 640px
//       640: {
//           slidesPerView: 3,
//       }
//   }
// });
