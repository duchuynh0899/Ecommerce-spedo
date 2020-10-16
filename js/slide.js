var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var body = document.getElementsByClassName("body")[0];
var preload = document.getElementsByClassName("preload")[0];
window.addEventListener("load", function(event) {
  
  setTimeout(()=>{
    preload.style.display = "none";
    body.style.display = "block";
    modal.style.display = "block";
  },3000);
  
  

});
span.onclick = function() {
  modal.style.display = "none";
  
}


$(".product-colors5 span").click(function(){
  $(".product-colors5 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic5").css("background-image",$(this).attr("data-pic"));
  
   $(".main__product--price5 p").css("color",$(this).attr("data-color"));
  
});

$(".product-colors4 span").click(function(){
  $(".product-colors4 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic4").css("background-image",$(this).attr("data-pic"));
  
   $(".main__product--price4 p").css("color",$(this).attr("data-color"));
  
});

$(".product-colors3 span").click(function(){
  $(".product-colors3 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic3").css("background-image",$(this).attr("data-pic"));
  
   $(".main__product--price3 p").css("color",$(this).attr("data-color"));
  
});


$(".product-colors2 span").click(function(){
  $(".product-colors2 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic2").css("background-image",$(this).attr("data-pic"));
  
   $(".main__product--price2 p").css("color",$(this).attr("data-color"));
  
});

$(".product-colors1 span").click(function(){
  $(".product-colors1 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic1").css("background-image",$(this).attr("data-pic"));
  
   $(".main__product--price1 p").css("color",$(this).attr("data-color"));
  
});

$(".product-colors0 span").click(function(){
  $(".product-colors0 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic0").css("background-image",$(this).attr("data-pic"));
  
   $(".main__product--price0 p").css("color",$(this).attr("data-color"));
  
});

// SCROLL PROCESS BAR
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// menu



const menu = document.querySelector(".menu");
const header = document.querySelector(".header1");
const navbar = document.querySelector(".navmenu__li");
const navbar_ul = document.querySelector(".navmenu__li> ul");
menu.addEventListener("click", () => {  
   menu.classList.toggle("active");
   header.classList.toggle("active");
   navbar.classList.toggle('active');
   navbar_ul.classList.toggle("active")
   
});
