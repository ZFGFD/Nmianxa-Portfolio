// year
document.getElementById('year').textContent = new Date().getFullYear();

// Typewriter effect
(function(){
  const els = document.querySelectorAll('[data-words]');
  els.forEach(el=>{
    const words = JSON.parse(el.getAttribute('data-words'));
    let i=0, pos=0, forward=true;
    setInterval(()=>{
      if(forward){pos++; if(pos>words[i].length){forward=false;setTimeout(()=>{},500)}} else {pos--; if(pos<0){forward=true;i=(i+1)%words.length}}
      el.textContent = words[i].slice(0,pos);
    },80);
  });
})();

// Scroll reveal
const items = document.querySelectorAll('.proj');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); } });
},{threshold:0.15});
items.forEach(i=>io.observe(i));

// Tilt effect
document.querySelectorAll('[data-tilt]').forEach(card=>{
  const inner = card.querySelector('.proj-inner');
  card.addEventListener('mousemove', (ev)=>{
    const bounds = card.getBoundingClientRect();
    const x = (ev.clientX - bounds.left) / bounds.width - 0.5;
    const y = (ev.clientY - bounds.top) / bounds.height - 0.5;
    const rx = (y * 8) * -1; const ry = (x * 10);
    inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(10px)`;
    inner.style.boxShadow = `${-ry*2}px ${rx*2}px 30px rgba(0,0,0,0.6)`;
  });
  card.addEventListener('mouseleave', ()=>{ inner.style.transform='none'; inner.style.boxShadow='none'; });
});

// Copy discord
function copy(text){
  navigator.clipboard?.writeText(text).then(()=>{
    const b = document.createElement('div');
    b.textContent='Kopiert!';
    b.style.position='fixed';b.style.right='20px';b.style.bottom='20px';
    b.style.padding='10px 14px';b.style.borderRadius='10px';
    b.style.background='linear-gradient(90deg,var(--accent),#7b6bff)';b.style.color='#041021';
    b.style.fontWeight='700';document.body.appendChild(b);
    setTimeout(()=>b.remove(),1500);
  });
}
document.getElementById('copyDiscord').addEventListener('click', ()=>copy('zf_g'));
document.getElementById('copyDiscord2').addEventListener('click', ()=>copy('zf_g'));

// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
}));

// particles background
(function(){
  const c = document.createElement('canvas');
  c.style.position='fixed'; c.style.left=0; c.style.top=0; c.style.width='100%'; c.style.height='100%';
  c.style.zIndex=0; c.style.pointerEvents='none'; document.body.appendChild(c);
  const ctx = c.getContext('2d'); let W,H;
  function resize(){ W=c.width=window.innerWidth; H=c.height=window.innerHeight; }
  window.addEventListener('resize', resize); resize();
  const pts = Array.from({length:60}, ()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.5+0.5,vx:(Math.random()-0.5)/1.5,vy:(Math.random()-0.5)/1.5}));
  function anim(){
    ctx.clearRect(0,0,W,H);
    for(let p of pts){
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=W;if(p.x>W)p.x=0; if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      ctx.beginPath(); ctx.fillStyle='rgba(125,150,255,0.06)'; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(anim);
  }
  anim();
})();

