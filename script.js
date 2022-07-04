const btn = document.querySelector("button");

btn.classList.add("switch-black")

function switchBtn (){
  btn.classList.toggle("switch-light");
}
 
btn.addEventListener("click", switchBtn);