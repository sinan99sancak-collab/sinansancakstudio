function sendMail(e){
  e.preventDefault();
  const name=document.getElementById("name").value;
  const company=document.getElementById("company").value;
  const service=document.getElementById("service").value;
  const date=document.getElementById("date").value;
  const message=document.getElementById("message").value;
  const subject=encodeURIComponent("Yeni Teklif Talebi - "+service);
  const body=encodeURIComponent(`Ad Soyad: ${name}\nFirma: ${company}\nHizmet: ${service}\nTarih: ${date}\n\nProje:\n${message}`);
  window.location.href=`mailto:?subject=${subject}&body=${body}`;
  return false;
}