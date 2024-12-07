//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

//Hamburger menu function
function hamburger() {
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("ffc-logo");
  if (menu.style.display === "block" && logo.style.display === "none") {
    menu.style.display = "none";
    logo.style.display = "block";
  } else {
    menu.style.display = "block";
    logo.style.display = "none";
  }
}

//Function to display the plastic example video
function plastic() {
  videoSource.src = "media/Plastic.mp4";
  descriptionSource.src = "media/burpees-descriptions.vtt";
  video.style.display = "block";
  video.poster = "images/plastic.jpg";
  video.load();
}

//Function to display the energy example video
function energy() {
  videoSource.src = "media/Energy.mp4";
  descriptionSource.src = "media/plank-descriptions.vtt";
  video.style.display = "block";
  video.poster = "images/cruise.jpg";
  video.load();
}

//Function to display the recycling example video
function recycling() {
  videoSource.src = "media/Recycling.mp4";
  descriptionSource.src = "media/mountain-descriptions.vtt";
  video.style.display = "block";
  video.poster = "images/recycling.jpg";
  video.load();
}

//Function to display slogen
function slogen() {
  var promo = document.getElementById("special");
  promo.firstChild.nodeValue = "Activist! Global! Sustainable! Inclusive!";
  promo.style.color = "#008000";
  promo.style.fontSize = "2em";
}
