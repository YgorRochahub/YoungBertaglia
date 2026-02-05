const whatsappNumber = "5513997122206"; // TROCAR PELO NÚMERO REAL

const whatsappButtons = document.querySelectorAll(".whatsapp-btn");

whatsappButtons.forEach(btn=>{
btn.addEventListener("click",()=>{
window.open(`https://wa.me/${whatsappNumber}`, "_blank");
});
});

const meetingButtons = document.querySelectorAll(".meeting-btn");

meetingButtons.forEach(btn=>{
btn.addEventListener("click",()=>{
alert("Aqui você pode integrar com agenda (Calendly, Google Agenda ou formulário).");
});
});


