const switch1 = document.getElementById("switch1");
const modeicon = document.getElementById("mode-icon");
switch1.onclick = (icon) => {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    modeicon.src = "assets/half-moon.png";
  } else {
    modeicon.src = "assets/light.png";
  }
};

var typed = new Typed(".span1", {
  strings: ["Student", "Web Developer"],
  typeSpeed: 140,
  backSpeed: 80,
  loop: true,
});
