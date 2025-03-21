"use strict";

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded");

  // Funcionalidad para el contacto
  var visibleContact = document.getElementById('visibleContact');
  var hiddenContact = document.querySelector('.hidden-contact');
  
  if (visibleContact && hiddenContact) {
    visibleContact.addEventListener('change', function() {
      console.log("visibleContact changed:", this.checked);
      if (this.checked) {
        hiddenContact.style.display = 'block';
        // Forzar el reflow para activar la transición
        void hiddenContact.offsetWidth;
        hiddenContact.style.opacity = '1';
      } else {
        hiddenContact.style.opacity = '0';
      }
    });
    
    hiddenContact.addEventListener('transitionend', function() {
      console.log("transition ended, opacity:", hiddenContact.style.opacity);
      if (hiddenContact.style.opacity === '0') {
        hiddenContact.style.display = 'none';
      }
    });
  } else {
    console.log("No se encontró el elemento visibleContact o hiddenContact");
  }

  // Funcionalidad para mostrar/ocultar el botón de portfolio en base al referrer
  var portfolioButton = document.querySelector(".porfolioButton");
  if (portfolioButton) {
    // Aseguramos que el botón tenga posición fixed en la esquina superior izquierda
    portfolioButton.style.top = "10px";
    portfolioButton.style.left = "10px";

    // Se muestra el botón solo si el documento proviene de una página diferente al index
    if (document.referrer && !document.referrer.includes("index.html")) {
      portfolioButton.style.opacity = "1";
      portfolioButton.style.pointerEvents = "auto";
      console.log("Portfolio button mostrado (referrer distinto de index)");
    } else {
      portfolioButton.style.opacity = "0";
      portfolioButton.style.pointerEvents = "none";
      console.log("Portfolio button oculto (referrer es index o no hay referrer)");
    }
  } else {
    console.log("No se encontró el elemento porfolioButton");
  }
});
