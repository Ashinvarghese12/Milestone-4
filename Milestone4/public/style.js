
const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;

window.addEventListener('scroll', function() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});