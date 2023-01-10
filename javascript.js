/*## Colors*/
/*### Primary*/
const orange = " hsl(25, 97%, 53%)";
/*### Neutral*/
const white = " hsl(0, 0%, 100%)";
const whiteSmoke = "hsl(41, 96%, 89%)";
const LightGrey = "hsl(217, 12%, 63%)";
const mediumGrey = " hsl(216, 12%, 54%)";
const darkBlue = " hsl(213, 19%, 18%)";
const mediunDarkBlue = "hsl( 215, 23%, 13%)";
const veryDarkBlue = "hsl(216, 12%, 8%)";





function load() {

  for (let i = 1; i <= 5; i++) {
    
    var x = document.getElementById("opcion" + i);
    var y = document.getElementById("lbl-option" + i);
    var selected
    y.style.backgroundColor = null;
    y.style.color = null;

    if (x.checked == true) {

      y.style.backgroundColor = orange;
      y.style.color = whiteSmoke;
      x.checked = false;
      selected = i
      localStorage.setItem("nombre", selected);
    }
  }
  
}

document.addEventListener("click", load);





