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
})();
