const CONFIG={whatsapp:'234XXXXXXXXXX',email:'EMAIL_PLACEHOLDER@example.com',msg:'Hello Tuoyo, I saw your portfolio and I would like to discuss a website for my business.'};
const $=s=>document.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
document.documentElement.classList.add('js');
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
let tt;const toast=t=>{const e=$('#ts');e.textContent=t;e.classList.add('o');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('o'),3200)};
const L=(a,f)=>a.map(f).join('');
const hd=$('.hd'),mm=$('#mm'),mb=$('.mb');
addEventListener('scroll',()=>hd.classList.toggle('sc',scrollY>8),{passive:true});
function menu(o){mm.classList.toggle('o',o);mm.inert=!o;mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu');document.body.style.overflow=o?'hidden':''}
mb.onclick=()=>menu(!mm.classList.contains('o'));
mm.querySelectorAll('a').forEach(a=>a.onclick=()=>menu(false));
addEventListener('keydown',e=>{if(e.key==='Escape'&&mm.classList.contains('o')){menu(false);mb.focus()}});
matchMedia('(min-width:901px)').onchange=e=>e.matches&&menu(false);
$$('[data-st]').forEach(g=>[...g.children].forEach((c,i)=>c.style.setProperty('--dl',i*60+'ms')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
$$('.rv,.wa').forEach(e=>io.observe(e));
const st=$('#stage');
if(!rm&&matchMedia('(hover:hover) and (pointer:fine)').matches){let f;$('.hero').addEventListener('pointermove',e=>{cancelAnimationFrame(f);f=requestAnimationFrame(()=>{const r=st.getBoundingClientRect();st.style.setProperty('--px',((e.clientX-r.left)/r.width-.5)*18);st.style.setProperty('--py',((e.clientY-r.top)/r.height-.5)*14)})})}
const tl=$('#tl'),steps=$$('.st');
function prog(){const r=tl.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.62-r.top)/r.height));tl.style.setProperty('--p',p);steps.forEach(s=>{s.classList.toggle('on',s.getBoundingClientRect().top<innerHeight*.62)})}
addEventListener('scroll',prog,{passive:true});addEventListener('resize',prog);prog();
$$('#faq button').forEach(b=>b.onclick=()=>{const q=b.closest('.q'),o=!q.classList.contains('o');q.classList.toggle('o',o);b.setAttribute('aria-expanded',o)});
const dlg=$('#dlg'),mw=$('#mw'),full=$('#full-site');
const urls={school:'/school/',clinic:'/clinic/',homes:'/homes/'};
let cur='school',dev='d',trigger=null;
function draw(){
  mw.innerHTML=`<div class="preview-loading" role="status">Loading website…</div><div class="preview-frame ${dev==='p'?'phone':''}"><iframe title="${cur} website preview" loading="lazy"></iframe></div>`;
  const frame=mw.querySelector('iframe'),wrap=mw.querySelector('.preview-frame'),load=mw.querySelector('.preview-loading');
  frame.onload=()=>load.remove();
  frame.src=urls[cur]+'?preview=1';
  wrap.classList.toggle('phone',dev==='p');
  full.href=urls[cur];full.setAttribute('aria-label','View full '+({school:'school',clinic:'clinic',homes:'real estate'}[cur])+' website');
  dlg.querySelectorAll('[data-c]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.c===cur));
  dlg.querySelectorAll('[data-d]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.d===dev));
}
$$('[data-open]').forEach(b=>b.onclick=()=>{trigger=b;cur=b.dataset.open;draw();dlg.showModal();document.body.style.overflow='hidden'});
$$('.wkS').forEach(s=>s.addEventListener('click',e=>{if(!e.target.closest('button'))s.querySelector('.ex').click()}));
dlg.addEventListener('click',e=>{const t=e.target;if(t===dlg||t.closest('.x')||t.closest('[data-close]'))dlg.close();else if(t.dataset.c){cur=t.dataset.c;draw()}else if(t.dataset.d){dev=t.dataset.d;draw()}});
dlg.addEventListener('cancel',e=>{e.preventDefault();dlg.close()});
dlg.addEventListener('close',()=>{document.body.style.overflow='';mw.innerHTML='';if(trigger)trigger.focus()});
const wa=()=>/X/.test(CONFIG.whatsapp)?toast('Prototype: WhatsApp number not set yet. Add it in CONFIG.'):window.open('https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(CONFIG.msg),'_blank','noopener');
$$('[data-wa]').forEach(a=>a.onclick=e=>{e.preventDefault();wa()});
$$('[data-mail]').forEach(a=>a.onclick=e=>{if(/PLACEHOLDER/.test(CONFIG.email)){e.preventDefault();toast('Prototype: email address not set yet.')}});
$$('[data-ph]').forEach(a=>{a.setAttribute('aria-label',a.textContent+' (placeholder link)');a.onclick=e=>{e.preventDefault();toast('Placeholder: add your '+a.textContent+' link.')}});
$('#f').addEventListener('submit',e=>{e.preventDefault();const f=e.target,fm=$('#fm');if(!f.checkValidity()){fm.textContent='Please add your name and a short message.';(f.querySelector(':invalid')||f).focus();return}fm.textContent='Demo only: nothing was sent. In the live site this would reach you by email or WhatsApp.';f.reset()});
