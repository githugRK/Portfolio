var typed = new Typed(".text",{
    size: 30,
    strings:["Rama Krishna Bandi", "Frontend Developer","Rama Krishna Bandi", "Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});

// Get the modal and the image element within it
var modal = document.getElementById("certificateModal");
var modalImg = document.getElementById("certificateImage");

// Get all "View Certificate" buttons
var btns = document.querySelectorAll(".view-certificate");

// Attach click event listeners to each button
btns.forEach(function(btn) {
  btn.onclick = function() {
    var imgSrc = this.getAttribute("data-img-src"); // Get the image source from data-img-src attribute
    modalImg.src = imgSrc; // Set the modal image source
    modal.style.display = "block"; // Display the modal
  }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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