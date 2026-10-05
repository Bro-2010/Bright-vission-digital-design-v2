const nav=document.getElementById("mainNav"), menuBtn=document.getElementById("menuBtn");
menuBtn?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const phone="233599035746";
const form=document.getElementById("bookingForm");
const service=document.getElementById("service");
const toast=document.getElementById("toast");

function showToast(msg){
  toast.textContent=msg; toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),3000);
}
document.querySelectorAll(".book-service").forEach(btn=>{
  btn.addEventListener("click",()=>{
    service.value=btn.dataset.service;
    document.getElementById("book").scrollIntoView({behavior:"smooth"});
    setTimeout(()=>document.getElementById("clientName").focus(),500);
  });
});

form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("clientName").value.trim();
  const clientPhone=document.getElementById("clientPhone").value.trim();
  const chosen=service.value;
  const details=document.getElementById("details").value.trim();
  const deadline=document.getElementById("deadline").value;
  const budget=document.getElementById("budget").value.trim();
  if(!name||!clientPhone||!chosen||!details){showToast("Please complete the required fields.");return;}
  const text=[
    "Hello Abdul Basit, I want to book a service from Bright Vision Digital Design.",
    "",
    `Name: ${name}`,
    `Phone/WhatsApp: ${clientPhone}`,
    `Service: ${chosen}`,
    `Project details: ${details}`,
    deadline?`Preferred deadline: ${deadline}`:"",
    budget?`Budget: ${budget}`:"",
    "",
    "Please let me know the next steps."
  ].filter(Boolean).join("\n");
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,"_blank","noopener");
  showToast("Opening WhatsApp with your booking details...");
});
document.getElementById("year").textContent=new Date().getFullYear();
