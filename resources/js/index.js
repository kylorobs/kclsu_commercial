
$(document).ready(function() {
$('.venue-content').hide();
$('#shack-coffee').on('click', function(){
  $('#coffee-description').slideToggle("slow");

});

  $('#shack-food').on('click', function(){
  $('#food-description').slideToggle("slow");

});

// When the user scrolls the page, execute myFunction

window.onscroll = function() {
  stickNav()
};

// Get the navbar
var navbar = document.getElementById("stickynav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

const currentDate = new Date();
const currentDay = currentDate.getDay();

if (currentDay === 2) {
 document.getElementById('tues').style.color = 'purple';
 document.getElementById('tues').style.fontWeight = 'bold';
}

else if (currentDay === 3) {
 document.getElementById('weds').style.color = 'purple';
 document.getElementById('weds').style.fontWeight = 'bold';
};

});


/*
function fadeNav(){
  if (navbar.hasClass(".sticky"){
    $('.nav li').addclass('opacity', '1');
  })
}
*/
