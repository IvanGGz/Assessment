// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}









var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var item1 = document.getElementById("item1");


item1.addEventListener("click", function(){
  document.createTextNode = "Hello World";
});

var button = document.getElementById("item1");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
    if(input.value.length > 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
    

})

var cart1 = document.getElementById("item1");
var cart2 = document.getElementById("item2");
var cart3 = document.getElementById("item3");
var cart4 = document.getElementById("item4");
var cart5 = document.getElementById("item5");
var cart6 = document.getElementById("item6");
var cart7 = document.getElementById("item7");
var cart8 = document.getElementById("item8");

cart1.addEventListener("click", function(){
alert("Added to cart");
document.createTextNode("Iphone 11 = $230");
})
cart2.addEventListener("click", function(){
  alert("Added to cart");
})
cart3.addEventListener("click", function(){
  alert("Added to cart");
})
cart4.addEventListener("click", function(){
  alert("Added to cart");
})
cart5.addEventListener("click", function(){
  alert("Added to cart");
})
cart6.addEventListener("click", function(){
  alert("Added to cart");
})
cart7.addEventListener("click", function(){
  alert("Added to cart");
})
cart8.addEventListener("click", function(){
  alert("Added to cart");
})




