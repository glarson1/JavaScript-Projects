function countdown() { //named a function
    var seconds = document.getElementById("seconds").value; //says seconds is equal to the value inputed by the user

    function tick() { //named a function that is still inside the countdown() function
        seconds = seconds - 1; //subtracting a second from the seconds variable
        timer.innerHtml = seconds;
        var time = setTimeout(tick, 1000); //setTimout(tick, 1000) means program is pausing for 1000 milliseconds (or 1 sec)
        if (seconds == -1) { //"when the timer runs out of seconds"
            alert("Time's up!"); //alert this
            clearTimeout(time); //clears the timer we had set
            timer.innerHtml = ""; 
        }
    }
    tick()
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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