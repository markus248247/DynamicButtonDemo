if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.add('light-mode');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (event.matches) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }
});


const buttons = document.querySelectorAll(".Button");

for (const button of buttons) {
  button.addEventListener("click", function () {
    button.style.backgroundColor = "rgb(140, 134, 170)";
  });
}
    