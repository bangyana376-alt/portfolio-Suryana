// assets/js/script.js

// loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  loader.classList.add('loaded');
  setTimeout(() => loader.remove(), 700);
});

// mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
    menuBtn.classList.toggle('open');
  });
  navList.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navList.classList.remove('open');
      menuBtn.classList.remove('open');
    });
  });
}

// scroll reveal
function revealOnScroll() {
  const items = document.querySelectorAll('.sr');
  const trigger = window.innerHeight * 0.85;
  items.forEach(i => {
    const top = i.getBoundingClientRect().top;
    if (top < trigger) i.classList.add('show');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// hero grid canvas (subtle)
(function heroGrid(){
  const c = document.querySelector('.hero-grid');
  if (!c) return;
  const ctx = c.getContext('2d');
  function resize(){ c.width = c.clientWidth; c.height = c.clientHeight; }
  window.addEventListener('resize', resize); resize();
  let t = 0;
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.strokeStyle = 'rgba(94,240,255,0.06)';
    ctx.lineWidth = 1;
    const gap = 48;
    for (let x = 0; x < c.width; x += gap){
      ctx.beginPath();
      ctx.moveTo(x + Math.sin(t + x*0.003)*4, 0);
      ctx.lineTo(x + Math.sin(t + x*0.003)*4, c.height);
      ctx.stroke();
    }
    for (let y = 0; y < c.height; y += gap){
      ctx.beginPath();
      ctx.moveTo(0, y + Math.cos(t + y*0.003)*4);
      ctx.lineTo(c.width, y + Math.cos(t + y*0.003)*4);
      ctx.stroke();
    }
    t += 0.01;
    requestAnimationFrame(draw);
  }
  draw();
})();

// photo hover gentle rgb shift
const photo = document.querySelector('.profile-photo');
if (photo){
  photo.addEventListener('mouseenter', () => {
    photo.style.filter = `brightness(1.25) saturate(1.15) hue-rotate(${(Math.random()*40)-20}deg)`;
  });
  photo.addEventListener('mouseleave', () => {
    photo.style.filter = 'brightness(1)';
  });
}
