const cfg = window.SINGHWANI_CONFIG || {};
const services = [
  ["Wedding Photography","weddings","♡","Wedding day coverage, rituals, candid moments, bridal portraits and family photographs."],
  ["Pre-Wedding Shoot","weddings","✦","Couple portraits and a personalised pre-wedding photo session."],
  ["Destination Wedding Shoot","weddings","⌖","Photography planning and coverage for weddings away from home."],
  ["Engagement Photography","weddings","◇","Ring ceremony, couple portraits, family photographs and stage coverage."],
  ["Wedding Cinematography","films","▶","Cinematic wedding storytelling with carefully edited highlight films."],
  ["Pre-Wedding Films","films","▷","A short cinematic film shaped around your story and personality."],
  ["Wedding Teaser & Highlights","films","▣","A beautifully edited film featuring the key moments of your celebration."],
  ["Full Event Videography","films","▤","Video coverage for ceremonies, functions and special events."],
  ["Birthday Photography","celebrations","✧","Birthday celebrations, cake cutting, family portraits and candid moments."],
  ["Anniversary Photography","celebrations","♡","Romantic portraits and meaningful moments from your anniversary."],
  ["Party Photography","celebrations","✦","Candid coverage of gatherings, parties and private celebrations."],
  ["Festival Photography","celebrations","☼","Rituals, colours and cultural moments captured with care."],
  ["Function Photography","celebrations","⌑","Coverage for family, cultural, academic and official functions."],
  ["Portrait Shoot","commercial","◉","Individual portraits with considered lighting and composition."],
  ["Catalogue Photography","commercial","▦","Consistent product photographs for catalogues and brochures."],
  ["E-commerce Product Photography","commercial","◇","Clean product imagery for online stores and retail platforms."],
  ["Brand Photography","commercial","✧","Visual content that reflects your business and brand identity."],
  ["Corporate Photography","commercial","▣","Professional images for teams, businesses and corporate communication."],
  ["Corporate Headshots","commercial","◉","Polished individual portraits for professional profiles."],
  ["Commercial Still Photography","commercial","▦","Product and campaign stills for marketing and advertising."],
  ["Film Production Stills","films","▶","Behind-the-scenes and production still photography."],
  ["4K Video Production","films","▷","High-resolution video production and post-production support."]
];
const grid = document.getElementById("serviceGrid");
function renderServices(filter="all"){
  grid.innerHTML = services.filter(s=>filter==="all"||s[1]===filter).map(s=>`<article class="service-card"><span class="service-icon">${s[2]}</span><h3>${s[0]}</h3><p>${s[3]}</p><a href="#contact" data-service="${s[0]}">ENQUIRE ABOUT THIS ↗</a></article>`).join("");
  grid.querySelectorAll("[data-service]").forEach(a=>a.addEventListener("click",()=>{const select=document.querySelector('[name="service"]');if(select){const name=a.dataset.service;const opt=[...select.options].find(o=>name.toLowerCase().includes(o.text.toLowerCase())||o.text.toLowerCase().includes(name.toLowerCase()));if(opt)select.value=opt.value;}}));
}
renderServices();
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderServices(btn.dataset.filter)}));
const menu=document.querySelector(".menu-toggle"), nav=document.querySelector(".main-nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"×":"☰"});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.textContent="☰"}));
const phoneEl=document.getElementById("phoneLink");
if(cfg.phoneLink){phoneEl.href=`tel:${cfg.phoneLink}`;phoneEl.textContent=cfg.phoneDisplay||cfg.phoneLink;}
else{phoneEl.href="#contact";phoneEl.textContent=cfg.phoneDisplay||"Add studio phone number";}
const mapQ=encodeURIComponent(cfg.mapQuery||"Singhwani Films Ashok Nagar Kanpur");
document.getElementById("mapFrame").src=`https://www.google.com/maps?q=${mapQ}&output=embed`;
document.getElementById("directionsLink").href=`https://www.google.com/maps/search/?api=1&query=${mapQ}`;
const review=document.getElementById("reviewLink");
review.href=cfg.googleReviewUrl||cfg.justdialUrl||"https://www.google.com/search?q=Singhwani+Films+Kanpur+reviews";
const waLink=(message)=>cfg.whatsappNumber?`https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(message)}`:`https://wa.me/?text=${encodeURIComponent(message)}`;
document.getElementById("floatingWhatsapp").href=waLink("Hello Singhwani Films, I would like to enquire about your photography and cinematography services.");
document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();const d=Object.fromEntries(new FormData(e.target).entries());
  const msg=`Hello Singhwani Films,\n\nI would like to enquire about your services.\nName: ${d.name}\nPhone: ${d.phone}\nService: ${d.service}\nEvent date: ${d.date||"Not decided"}\nLocation: ${d.location||"Not decided"}\nMessage: ${d.message||"Please contact me."}`;
  window.open(waLink(msg),"_blank","noopener");
});
document.getElementById("estimateForm").addEventListener("submit",e=>{
  e.preventDefault();const type=document.getElementById("estimateType").value,duration=document.getElementById("estimateDuration").value;
  const message=`Hello Singhwani Films, I am interested in ${type} coverage. Expected duration: ${duration}. Please share availability and a detailed quote.`;
  window.open(waLink(message),"_blank","noopener");
});
document.getElementById("year").textContent=new Date().getFullYear();
