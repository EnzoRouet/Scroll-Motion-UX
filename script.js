window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    navbar.style.height = 45 + "px";
  } else {
    navbar.style.height = 90 + "px";
  }

  // Permet d'avoir le pourcentage de là où on en est du scroll de la page

  const value =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if ((value > 0, 45)) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "translateX(0)";
  } else {
    imgImprovise.style.transform = "translateX(-200px";
    imgImprovise.style.opacity = "0";
  }

  //Permet d'avoir le max du scroll possible qui se raffraichit en fonction de la taille de l'écran

  const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

  if (window.scrollY >= maxScrollY) {
    popup.style.opacity = "1";
    popup.style.transform = "translateX(0)";
  }

  closeBtn.addEventListener("click", () => {
    popup.style.visibility = "hidden";
  });
});
