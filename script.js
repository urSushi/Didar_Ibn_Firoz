const body=document.body;
const glow=document.querySelector('.cursor-glow');
const theme=document.querySelector('.theme-btn');
const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav nav');

document.addEventListener('mousemove',e=>{
  glow.style.left=e.clientX+'px';
  glow.style.top=e.clientY+'px';
});

theme.addEventListener('click',()=>{
  body.classList.toggle('light');
  theme.textContent=body.classList.contains('light')?'◑':'◐';
  localStorage.setItem('portfolio-theme',body.classList.contains('light')?'light':'dark');
});
if(localStorage.getItem('portfolio-theme')==='light'){body.classList.add('light');theme.textContent='◑'}

menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('mobile-open');
  menu.classList.toggle('open',open);
});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach((entry,i)=>{
    if(entry.isIntersecting){
      entry.target.style.transitionDelay=(i%4)*80+'ms';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal,.section').forEach(el=>observer.observe(el));

document.getElementById('year').textContent=new Date().getFullYear();
