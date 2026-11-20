(() => {
  const preview = new URLSearchParams(location.search).get("preview") === "1";
  const banner = document.querySelector("[data-demo-banner]");
  if (banner) banner.hidden = preview;
  const toast=document.createElement("div");
  toast.className="toast";toast.setAttribute("role","status");toast.setAttribute("aria-live","polite");document.body.append(toast);
  let timer;
  window.showDemoToast=message=>{toast.textContent=message;toast.classList.add("is-visible");clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove("is-visible"),2800)};
  if(preview)document.querySelectorAll("[data-preview-outbound]").forEach(el=>el.addEventListener("click",event=>{event.preventDefault();window.showDemoToast("Open the full website to explore")}));
  const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(!reduced&&"IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:"0px 0px -5%"});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el))}else document.querySelectorAll(".reveal").forEach(el=>el.classList.add("is-visible"));
  const menuButton=document.querySelector(".menu-button,.homes-menu,.clinic-menu");
  const menu=menuButton?.closest("header")?.querySelector("nav");
  if(menuButton&&menu){
    const setMenu=open=>{
      menuButton.setAttribute("aria-expanded",String(open));
      menuButton.setAttribute("aria-label",open?"Close menu":"Open menu");
      menu.classList.toggle("is-open",open);
      document.body.style.overflow=open?"hidden":"";
      menuButton.classList.toggle("is-open",open);
    };
    menuButton.addEventListener("click",()=>setMenu(menuButton.getAttribute("aria-expanded")!=="true"));
    menu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>setMenu(false)));
    addEventListener("keydown",event=>{if(event.key==="Escape"&&menuButton.getAttribute("aria-expanded")==="true"){setMenu(false);menuButton.focus()}});
    matchMedia("(min-width:761px)").addEventListener("change",event=>{if(event.matches)setMenu(false)});
  }
  const header=document.querySelector("header");
  const updateHeader=()=>header?.classList.toggle("scrolled",scrollY>8);
  addEventListener("scroll",updateHeader,{passive:true});updateHeader();
  document.querySelectorAll("img").forEach(img=>{
    img.style.opacity="0";img.style.transition="opacity 400ms ease";
    const reveal=()=>{img.style.opacity="1"};
    if(img.complete)reveal();else img.addEventListener("load",reveal,{once:true});
    img.addEventListener("error",()=>{img.style.opacity="1";img.style.background="#dfe5df"});
  });
})();
