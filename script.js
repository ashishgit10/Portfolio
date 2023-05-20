const switch1=document.getElementById("switch1")

switch1.onclick=()=>{
  document.body.classList.toggle("light-theme");
  if(document.body.classList.contains("light-theme")){
    
  }
}

var typed = new Typed(".span1", {
  strings: ["Student", "Web Developer"],
  typeSpeed: 140,
  backSpeed: 80,
  loop: true,
});
