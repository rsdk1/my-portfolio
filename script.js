const words = [
  "SDET",
  "QA Automation Engineer",
  "AI Tester",
  "LLM Tester",
  "RAG Tester",
  "API Test Engineer",
  "Database Tester",
  "Security Tester",
  "Mobile Automation Tester"
];
let wi=0, ci=0, deleting=false;
const typing=document.getElementById("typing");
function typeLoop(){
  const word=words[wi];
  typing.textContent=word.slice(0,ci);
  if(!deleting){
    ci++;
    if(ci>word.length){deleting=true;setTimeout(typeLoop,1100);return}
  }else{
    ci--;
    if(ci<0){deleting=false;ci=0;wi=(wi+1)%words.length}
  }
  setTimeout(typeLoop,deleting?55:90);
}
typeLoop();

const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

function sendEmail(event){
  event.preventDefault();
  const name=document.getElementById("name").value;
  const email=document.getElementById("email").value;
  const message=document.getElementById("message").value;
  const subject=encodeURIComponent("Portfolio contact from "+name);
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href=`mailto:rs.dk.00001@gmail.com?subject=${subject}&body=${body}`;
}
