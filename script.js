function sifreKontrol() {
  const sifre = document.getElementById("sifre").value;
  if (sifre === "askim123") {
    document.querySelector(".kapi.sol").style.transform = "translateX(-100%)";
    document.querySelector(".kapi.sag").style.transform = "translateX(100%)";
    document.getElementById("sifrePaneli").style.display = "none";

    setTimeout(() => {
      document.getElementById("icerik").style.display = "block";
    }, 1000);
  } else {
    alert("Şifre yanlış 🥲");
  }
}

function kontrolEt() {
  document.getElementById("icerik").style.display = "none";
}
