function sifreKontrol() {
  const sifre = document.getElementById("sifre").value;
  if (sifre === "askim123") {
    document.getElementById("sifreEkrani").style.display = "none";
    document.getElementById("icerik").style.display = "block";
  } else {
    alert("Şifre yanlış 🥲");
  }
}

function kontrolEt() {
  document.getElementById("icerik").style.display = "none";
}
