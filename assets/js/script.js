'Use Script'

/**
 * Navbar Toggle
 */

const overlay = document.querySelector('[data-overlay]');
const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navbar = document.querySelector('[data-navbar]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');
const navLinks = document.querySelectorAll('[data-nav-link]');

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', function() {
      navbar.classList.toggle('active');
      overlay.classList.toggle('active');
    });
  };
};

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * Header Sticky & Go to top
 */

const header = document.querySelector('[data-header]');

// Go to top button
const goToBtn = document.querySelector('[data-go-top]')

window.addEventListener('scroll', function() {
  
  if (window.scrollY >= 200) {
    header.classList.add('active');

    // Go to top button
    goToBtn.classList.add('active');
  } else {
    header.classList.remove('active');

    // Go to top button
    goToBtn.classList.remove('active');
  };
  
});












