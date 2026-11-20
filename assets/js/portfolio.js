const CONFIG={whatsapp:'234XXXXXXXXXX',email:'EMAIL_PLACEHOLDER@example.com',msg:'Hello Tuoyo, I saw your portfolio and I would like to discuss a website for my business.'};
const $=s=>document.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
document.documentElement.classList.add('js');
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
let tt;const toast=t=>{const e=$('#ts');e.textContent=t;e.classList.add('o');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('o'),3200)};
const L=(a,f)=>a.map(f).join('');
const nav=(n,l,b)=>`<div class="pn3"><b><i class="lo"></i>${n}</b><span class="pl">${L(l,x=>`<span>${x}</span>`)}</span><button class="pb3" type="button">${b}</button></div>`;
const P={
school:()=>nav('Bright Future Academy',['Programmes','Admissions','Gallery','Contact'],'Enquire')+
`<div class="pgh"><div><h4>Where every child is known by name.</h4><p>Nursery, primary and junior secondary education with small classes and a caring team.</p><div class="bt3"><button class="pb3" type="button">Admissions open</button><button class="pb3 o" type="button">Book a visit</button></div></div><div class="ph-i"><i class="ig sc1"></i><i class="ig sc2"></i><i class="ig sc3"></i></div></div>
<div class="ps3 a"><h5>Programmes</h5><div class="g3">${L([['Nursery','Ages 2 to 5','Play-led learning, early reading and number sense.'],['Primary','Primary 1 to 6','Core subjects, a reading culture and weekly clubs.'],['Junior Secondary','JSS 1 to 3','Preparing pupils for senior secondary school.']],x=>`<div><h6>${x[0]}</h6><p><b>${x[1]}</b><br>${x[2]}</p></div>`)}</div></div>
<div class="ps3"><h5>How admission works</h5><div class="stp"><div><b>1. Send an enquiry</b><p>Message the admissions desk.</p></div><div><b>2. Visit the school</b><p>Meet the teachers and see the classrooms.</p></div><div><b>3. Assessment and offer</b><p>We confirm the place and the fee schedule.</p></div></div></div>
<div class="qb"><h5>Places for next term?</h5><button class="pb3" type="button">Ask on WhatsApp</button></div>`,
clinic:()=>nav('WellnessCare Clinic',['Services','Hours','Location'],'Call us')+
`<div class="pgh"><div><h4>Care you can reach, close to home.</h4><p>General health services, laboratory tests and a pharmacy under one roof.</p><div class="bt3"><button class="pb3" type="button">Book an appointment</button><button class="pb3 o" type="button">WhatsApp us</button></div></div><div class="hr"><h6>Opening hours</h6>${L([['Monday to Friday','8:00 am to 6:00 pm'],['Saturday','9:00 am to 2:00 pm'],['Sunday','Emergency line only']],x=>`<div><span>${x[0]}</span><b>${x[1]}</b></div>`)}</div></div>
<div class="ps3 a"><h5>Our services</h5><ul class="sl">${L(['General consultation','Antenatal care','Laboratory tests','Child immunisation','Pharmacy','Health screening'],x=>`<li>${x}</li>`)}</ul></div>
<div class="ps3"><div class="g2"><div><h5>Find us</h5><p>Clinic address to be added. Ample parking and a short walk from the main road.</p><div class="bt3"><button class="pb3" type="button">Get directions</button></div></div><div class="mp"></div></div></div>
<div class="qb"><h5>Not sure which service you need?</h5><button class="pb3" type="button">Send a message</button></div>`,
homes:()=>nav('Lagos Homes',['Buy','Rent','Short-let','Contact'],'Enquire')+
`<div class="pgh" style="grid-template-columns:1fr;padding-top:46px"><div><h4 style="max-width:16ch">Find a place in Lagos worth coming home to.</h4><div class="sb"><span>Area<b>Lekki, Yaba, Ikeja</b></span><span>Type<b>Apartment or house</b></span><span>Budget<b>Any budget</b></span><button class="pb3" type="button">Search</button></div></div></div>
<div class="ps3" style="padding-top:8px"><h5>Featured listings</h5><div class="g3">${L([['₦185,000,000','4-bed terrace duplex','Lekki Phase 1','4 beds · 5 baths','h1'],['₦4,500,000 a year','2-bed apartment','Yaba','2 beds · 2 baths','h2'],['₦95,000,000','3-bed semi-detached','Ikeja GRA','3 beds · 4 baths','h3']],x=>`<div class="lc"><i class="ig h ${x[4]}"></i><b>${x[0]}</b><h6>${x[1]}</h6><p>${x[2]} · ${x[3]}</p><button class="pb3" type="button">Request inspection</button></div>`)}</div><p style="margin-top:18px;font-size:12px">Sample listings for the concept.</p></div>
<div class="qb"><h5>Want to see a property in person?</h5><button class="pb3" type="button">Book an inspection</button></div>`
};
P.clinic.cls='t2';P.school.cls='t1';P.homes.cls='t3';
const fit=el=>{const v=el.firstElementChild;if(v)v.style.zoom=el.clientWidth/(v.classList.contains('m')?390:1040)};
const ro=new ResizeObserver(es=>es.forEach(e=>fit(e.target)));
function mount(el,name,m,obs){el.innerHTML=`<div class="pv ${P[name].cls}${m?' m':''}">${P[name]()}</div>`;fit(el);obs.observe(el)}
$$('.fit[data-p]').forEach(el=>mount(el,el.dataset.p,el.dataset.m,ro));
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
const dlg=$('#dlg'),mw=$('#mw'),rd=new ResizeObserver(es=>es.forEach(e=>fit(e.target)));
const urls={school:'brightfuture.example',clinic:'wellnesscare.example',homes:'lagoshomes.example'};
let cur='school',dev='d';
function draw(){rd.disconnect();mw.innerHTML=dev==='d'?`<div class="dvd"><div class="bar"><i></i><i></i><i></i><span>${urls[cur]}</span></div><div class="mf"></div></div>`:`<div class="phn"><div class="mf"></div></div>`;mount(mw.querySelector('.mf'),cur,dev==='p',rd);dlg.querySelectorAll('[data-c]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.c===cur));dlg.querySelectorAll('[data-d]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.d===dev))}
$$('[data-open]').forEach(b=>b.onclick=()=>{cur=b.dataset.open;draw();dlg.showModal();document.body.style.overflow='hidden'});
$$('.wkS').forEach(s=>s.addEventListener('click',e=>{if(!e.target.closest('button'))s.querySelector('.ex').click()}));
dlg.addEventListener('click',e=>{const t=e.target;if(t===dlg||t.closest('.x'))dlg.close();else if(t.dataset.c){cur=t.dataset.c;draw()}else if(t.dataset.d){dev=t.dataset.d;draw()}else if(t.closest('.pb3'))toast('In a real website this button opens WhatsApp or the enquiry form.')});
dlg.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();dlg.close()}});
dlg.addEventListener('close',()=>{document.body.style.overflow='';rd.disconnect()});
const wa=()=>/X/.test(CONFIG.whatsapp)?toast('Prototype: WhatsApp number not set yet. Add it in CONFIG.'):window.open('https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(CONFIG.msg),'_blank','noopener');
$$('[data-wa]').forEach(a=>a.onclick=e=>{e.preventDefault();wa()});
$$('[data-mail]').forEach(a=>a.onclick=e=>{if(/PLACEHOLDER/.test(CONFIG.email)){e.preventDefault();toast('Prototype: email address not set yet.')}});
$$('[data-ph]').forEach(a=>{a.setAttribute('aria-label',a.textContent+' (placeholder link)');a.onclick=e=>{e.preventDefault();toast('Placeholder: add your '+a.textContent+' link.')}});
$('#f').addEventListener('submit',e=>{e.preventDefault();const f=e.target,fm=$('#fm');if(!f.checkValidity()){fm.textContent='Please add your name and a short message.';(f.querySelector(':invalid')||f).focus();return}fm.textContent='Demo only: nothing was sent. In the live site this would reach you by email or WhatsApp.';f.reset()});
