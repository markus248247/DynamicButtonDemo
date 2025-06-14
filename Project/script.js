// Dark-/Light-Mode initial setzen
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.add('light-mode');
}

// Auf Änderung des Systemmodus reagieren
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  document.body.classList.toggle('dark-mode', event.matches);
  document.body.classList.toggle('light-mode', !event.matches);
});


 // Button-Farbe bei Klick ändern. Nach 0,5 Sekunden wechselt die 
 // Farbe zurück auf die Ursprungsfarbe
const buttons = document.querySelectorAll(".Button");

for (const button of buttons) {
  button.addEventListener("click", function () {
    button.style.backgroundColor = "rgb(140, 134, 170)";
    setTimeout(() => {
      button.style.backgroundColor = "";
    }, 500); // Farbe nach 0,5 Sekunden zurücksetzen
  });
}


