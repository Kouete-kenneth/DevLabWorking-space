
/* this piece of code makes the navbar-top fixed as long as we scroll pass the 
height of the heihgt of the navbar*/ 
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        navbar_height = document.querySelector('.navbar').offsetHeight;
        if (window.scrollY >navbar_height ) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        }
        document.getElementById("navheight").innerHTML="nav height= "+navbar_height;
    });
  });