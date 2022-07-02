'use strict';
//glitch effect
window.onscroll = function () {
  myFunction();
  myFunction2();
  myFunction5();
};

function myFunction() {
  if (document.documentElement.scrollTop > 150) {
    document.getElementById(`img1`).className = 'showBug';
    document.querySelector(`.toTop`).classList.add('biggersize');
  }
}
function myFunction5() {
  if (document.documentElement.scrollTop < 150) {
    document.querySelector(`.toTop`).classList.remove('biggersize');
  }
}
function myFunction2() {
  const showBugnow = function (when, img) {
    if (document.documentElement.scrollTop > when) {
      document.getElementById(img).className = 'showBug';
    }
  };
  showBugnow(1500, 'img3');
  showBugnow(1800, 'img4');
  showBugnow(2300, 'img5');
}
//custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.setAttribute(
    'style',
    'top:' + (e.pageY - 10) + 'px; left:' + (e.pageX - 10) + 'px'
  );
});

//scroll to Top Menu
const aboutElement = document.querySelector('.about');
const aboutElement1 = document.querySelector('.story');
const aboutElement3 = document.querySelector('.ourOfferMenu');
const aboutElement2 = document.querySelector('.toTop');
const aboutElement5 = document.querySelector('.Contact');

const body = document.querySelector('body');

const scrollTofunction = function (element, px) {
  element.addEventListener('click', function () {
    window.scrollTo({ top: px, behavior: 'smooth' });
  });
};
scrollTofunction(aboutElement, 750);
scrollTofunction(aboutElement1, 1500);
scrollTofunction(aboutElement3, 2150);
scrollTofunction(aboutElement2, 0);
scrollTofunction(aboutElement5, 2800);

//play video after click
const newspaperSpinning = [{ display: 'none' }, { display: 'block' }];
const clickHere = document.querySelector('.bgctext');
clickHere.addEventListener('click', function () {
  //hide website
  document.querySelector('header').style.display = 'none';
  const bodyvideo = document.querySelector('body');
  bodyvideo.style.height = '100vh';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('.top').style.display = 'none';
  document.querySelector('main').style.display = 'none';
  document.querySelector('.sectionMain').style.display = 'none';
  document.querySelector('.contactus').style.display = 'none';
  document.querySelector('.toTop').style.display = 'none';
  document.querySelector('.ourOffer').style.display = 'none';
  document.querySelector('.bottom').style.display = 'none';
  //play video
  document.querySelector('video').style.display = 'block';
  document.getElementById('background-video').play();
  //show button
  //body.addEventListener('click',refreshPage());
  setTimeout(thankyou, 11000);

  function thankyou() {
    bodyvideo.style.cursor = 'default';
    document.querySelector('.thankYou').style.display = 'block';
  }
});

//refresh page after movie
function refreshPage() {
  window.location.reload();
}
//cookies
const section_cookie = document.querySelector('.section_cookie');
const cookie__accept = document.querySelector('.accept');
const cookie_denide = document.querySelector('.denide');

cookie__accept.addEventListener(`click`, function (e) {
  e.stopPropagation();
  section_cookie.remove();
  body.style.cursor = 'none';
});
cookie_denide.addEventListener(`click`, function () {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});
//sticky logo on top
const header = document.querySelector('header');
const logoMekazu = document.querySelector('.logomekazu');
const stickylogo = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) logoMekazu.classList.add('sticky');
  else logoMekazu.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickylogo, {
  root: null,
  threshold: 0,
});
headerObserver.observe(header);
