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

//read more 
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "მეტის ნახვა";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "დაბრუნება";
    moreText.style.display = "inline";
  }
}

//read more 1
function myFunction1() {
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("myBtn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "მეტის ნახვა";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "დაბრუნება";
    moreText1.style.display = "inline";
  }
}

//read more 2
function myFunction2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "მეტის ნახვა";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "დაბრუნება";
    moreText2.style.display = "inline";
  }
}

//read more 3
function myFunction3() {
  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var btnText3 = document.getElementById("myBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "მეტის ნახვა";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "დაბრუნება";
    moreText3.style.display = "inline";
  }
}

//----------------------------------------------------
// read more for team

//------ gocha gogiberidze

function myFunction4() {
  var dots4 = document.getElementById("dots4");
  var moreText4 = document.getElementById("more4");
  var btnText4 = document.getElementById("myBtn4");

  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    btnText4.innerHTML = "მეტის ნახვა";
    moreText4.style.display = "none";
  } else {
    dots4.style.display = "none";
    btnText4.innerHTML = "დაბრუნება";
    moreText4.style.display = "inline";
  }
}

//--------- david chakvetadze
function myFunction5() {
  var dots5 = document.getElementById("dots5");
  var moreText5 = document.getElementById("more5");
  var btnText5 = document.getElementById("myBtn5");

  if (dots5.style.display === "none") {
    dots5.style.display = "inline";
    btnText5.innerHTML = "მეტის ნახვა";
    moreText5.style.display = "none";
  } else {
    dots5.style.display = "none";
    btnText5.innerHTML = "დაბრუნება";
    moreText5.style.display = "inline";
  }
}

//----gela tabatadze
function myFunction6() {
  var dots6 = document.getElementById("dots6");
  var moreText6 = document.getElementById("more6");
  var btnText6 = document.getElementById("myBtn6");

  if (dots6.style.display === "none") {
    dots6.style.display = "inline";
    btnText6.innerHTML = "მეტის ნახვა";
    moreText6.style.display = "none";
  } else {
    dots6.style.display = "none";
    btnText6.innerHTML = "დაბრუნება";
    moreText6.style.display = "inline";
  }
}

//----zviad eliziani
function myFunction7() {
  var dots7 = document.getElementById("dots7");
  var moreText7 = document.getElementById("more7");
  var btnText7 = document.getElementById("myBtn7");

  if (dots7.style.display === "none") {
    dots7.style.display = "inline";
    btnText7.innerHTML = "მეტის ნახვა";
    moreText7.style.display = "none";
  } else {
    dots7.style.display = "none";
    btnText7.innerHTML = "დაბრუნება";
    moreText7.style.display = "inline";
  }
}

//---- kakha margiani

function myFunction8() {
  var dots8 = document.getElementById("dots8");
  var moreText8 = document.getElementById("more8");
  var btnText8 = document.getElementById("myBtn8");

  if (dots8.style.display === "none") {
    dots8.style.display = "inline";
    btnText8.innerHTML = "მეტის ნახვა";
    moreText8.style.display = "none";
  } else {
    dots8.style.display = "none";
    btnText8.innerHTML = "დაბრუნება";
    moreText8.style.display = "inline";
  }
}

//------- levan otarashvili

function myFunction9() {
  var dots9 = document.getElementById("dots9");
  var moreText9 = document.getElementById("more9");
  var btnText9 = document.getElementById("myBtn9");

  if (dots9.style.display === "none") {
    dots9.style.display = "inline";
    btnText9.innerHTML = "მეტის ნახვა";
    moreText9.style.display = "none";
  } else {
    dots9.style.display = "none";
    btnText9.innerHTML = "დაბრუნება";
    moreText9.style.display = "inline";
  }
}

//-------- miranda gorgiladze

function myFunction10() {
  var dots10 = document.getElementById("dots10");
  var moreText10 = document.getElementById("more10");
  var btnText10 = document.getElementById("myBtn10");

  if (dots10.style.display === "none") {
    dots10.style.display = "inline";
    btnText10.innerHTML = "მეტის ნახვა";
    moreText10.style.display = "none";
  } else {
    dots10.style.display = "none";
    btnText10.innerHTML = "დაბრუნება";
    moreText10.style.display = "inline";
  }
}

//------ rezo bakuridze

function myFunction11() {
  var dots11 = document.getElementById("dots11");
  var moreText11 = document.getElementById("more11");
  var btnText11 = document.getElementById("myBtn11");

  if (dots11.style.display === "none") {
    dots11.style.display = "inline";
    btnText11.innerHTML = "მეტის ნახვა";
    moreText11.style.display = "none";
  } else {
    dots11.style.display = "none";
    btnText11.innerHTML = "დაბრუნება";
    moreText11.style.display = "inline";
  }
}

//-------nodar natidze

function myFunction12() {
  var dots12 = document.getElementById("dots12");
  var moreText12 = document.getElementById("more12");
  var btnText12 = document.getElementById("myBtn12");

  if (dots12.style.display === "none") {
    dots12.style.display = "inline";
    btnText12.innerHTML = "მეტის ნახვა";
    moreText12.style.display = "none";
  } else {
    dots12.style.display = "none";
    btnText12.innerHTML = "დაბრუნება";
    moreText12.style.display = "inline";
  }
}

//---- international team
//---- ralf braga

function myFunction13() {
  var dots13 = document.getElementById("dots13");
  var moreText13 = document.getElementById("more13");
  var btnText13 = document.getElementById("myBtn13");

  if (dots13.style.display === "none") {
    dots13.style.display = "inline";
    btnText13.innerHTML = "მეტის ნახვა";
    moreText13.style.display = "none";
  } else {
    dots13.style.display = "none";
    btnText13.innerHTML = "დაბრუნება";
    moreText13.style.display = "inline";
  }
}

//---------david brown

function myFunction14() {
  var dots14 = document.getElementById("dots14");
  var moreText14 = document.getElementById("more14");
  var btnText14 = document.getElementById("myBtn14");

  if (dots14.style.display === "none") {
    dots14.style.display = "inline";
    btnText14.innerHTML = "მეტის ნახვა";
    moreText14.style.display = "none";
  } else {
    dots14.style.display = "none";
    btnText14.innerHTML = "დაბრუნება";
    moreText14.style.display = "inline";
  }
}

//------ maria dimitrova

function myFunction15() {
  var dots15 = document.getElementById("dots15");
  var moreText15 = document.getElementById("more15");
  var btnText15 = document.getElementById("myBtn15");

  if (dots15.style.display === "none") {
    dots15.style.display = "inline";
    btnText15.innerHTML = "მეტის ნახვა";
    moreText15.style.display = "none";
  } else {
    dots15.style.display = "none";
    btnText15.innerHTML = "დაბრუნება";
    moreText15.style.display = "inline";
  }
}

//----- edward valenti

function myFunction16() {
  var dots16 = document.getElementById("dots16");
  var moreText16 = document.getElementById("more16");
  var btnText16 = document.getElementById("myBtn16");

  if (dots16.style.display === "none") {
    dots16.style.display = "inline";
    btnText16.innerHTML = "მეტის ნახვა";
    moreText16.style.display = "none";
  } else {
    dots16.style.display = "none";
    btnText16.innerHTML = "დაბრუნება";
    moreText16.style.display = "inline";
  }
}

//------- ken de boer

function myFunction17() {
  var dots17 = document.getElementById("dots17");
  var moreText17 = document.getElementById("more17");
  var btnText17 = document.getElementById("myBtn17");

  if (dots17.style.display === "none") {
    dots17.style.display = "inline";
    btnText17.innerHTML = "მეტის ნახვა";
    moreText17.style.display = "none";
  } else {
    dots17.style.display = "none";
    btnText17.innerHTML = "დაბრუნება";
    moreText17.style.display = "inline";
  }
}

//----dr patrick mcilwee

function myFunction18() {
  var dots18 = document.getElementById("dots18");
  var moreText18 = document.getElementById("more18");
  var btnText18 = document.getElementById("myBtn18");

  if (dots18.style.display === "none") {
    dots18.style.display = "inline";
    btnText18.innerHTML = "მეტის ნახვა";
    moreText18.style.display = "none";
  } else {
    dots18.style.display = "none";
    btnText18.innerHTML = "დაბრუნება";
    moreText18.style.display = "inline";
  }
}

// ----- melaine valenti

function myFunction19() {
  var dots19 = document.getElementById("dots19");
  var moreText19 = document.getElementById("more19");
  var btnText19 = document.getElementById("myBtn19");

  if (dots19.style.display === "none") {
    dots19.style.display = "inline";
    btnText19.innerHTML = "მეტის ნახვა";
    moreText19.style.display = "none";
  } else {
    dots19.style.display = "none";
    btnText19.innerHTML = "დაბრუნება";
    moreText19.style.display = "inline";
  }
}

// ----- ketevan tsikarishvili

function myFunction20() {
  var dots20 = document.getElementById("dots20");
  var moreText20 = document.getElementById("more20");
  var btnText20 = document.getElementById("myBtn20");

  if (dots20.style.display === "none") {
    dots20.style.display = "inline";
    btnText20.innerHTML = "მეტის ნახვა";
    moreText20.style.display = "none";
  } else {
    dots20.style.display = "none";
    btnText20.innerHTML = "დაბრუნება";
    moreText20.style.display = "inline";
  }
}

// ----- lasha panchulidze

function myFunction21() {
  var dots21 = document.getElementById("dots21");
  var moreText21 = document.getElementById("more21");
  var btnText21 = document.getElementById("myBtn21");

  if (dots21.style.display === "none") {
    dots21.style.display = "inline";
    btnText21.innerHTML = "მეტის ნახვა";
    moreText21.style.display = "none";
  } else {
    dots21.style.display = "none";
    btnText21.innerHTML = "დაბრუნება";
    moreText21.style.display = "inline";
  }
}

// ----- malkhaz abuseridze

function myFunction22() {
  var dots22 = document.getElementById("dots22");
  var moreText22 = document.getElementById("more22");
  var btnText22 = document.getElementById("myBtn22");

  if (dots22.style.display === "none") {
    dots22.style.display = "inline";
    btnText22.innerHTML = "მეტის ნახვა";
    moreText22.style.display = "none";
  } else {
    dots22.style.display = "none";
    btnText22.innerHTML = "დაბრუნება";
    moreText22.style.display = "inline";
  }
}


