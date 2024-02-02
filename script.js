const switch1 = document.getElementById("switch1");
const modeicon = document.getElementById("mode-icon");
switch1.onclick = (icon) => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    modeicon.src = "assets/light.png";
  } else {
    modeicon.src = "assets/half-moon.png";
  }
};

var typed = new Typed(".span1", {
  strings: ["Student", "Web Developer"," App Developer"],
  typeSpeed: 140,
  backSpeed: 80,
  loop: true,
});
