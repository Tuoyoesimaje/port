const menuButton=document.querySelector(".menu-button");
const schoolMenu=document.querySelector("#school-menu");
menuButton?.addEventListener("click",()=>{const open=menuButton.getAttribute("aria-expanded")==="true";menuButton.setAttribute("aria-expanded",String(!open));menuButton.setAttribute("aria-label",open?"Open menu":"Close menu");schoolMenu.classList.toggle("is-open",!open)});
document.querySelector("#school-enquiry")?.addEventListener("submit",event=>{event.preventDefault();const form=event.currentTarget;if(!form.checkValidity()){form.querySelector(":invalid")?.focus();return}form.querySelector(".form-status").textContent="Demo only: nothing was sent. Open the full website to connect with the admissions team.";form.reset()});
