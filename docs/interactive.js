document.getElementById("skillz1").style.color = "#20B2AA";
document.getElementById("skillz2").style.color = "#20B2AA";
document.getElementById("name").style.color = "#20B2AA";
document.getElementById("img").style.color = "#20B2AA";


function cambiarFondo(elemento) {
  if (elemento.style.backgroundColor == "Blue") {
    elemento.style.backgroundColor = "Green";
  } else {
    elemento.style.backgroundColor = "Blue";
  }
}

var textos = document.getElementsByClassName("info");

for (i = 0; i < textos.length; i++) {
  textos[i].style.color = "White";
  //cambiarFondo(textos[i]);
}
//Cambia el texto a color purpura
//textos[1].style.color = "Purple";

document.getElementById("name").addEventListener("click", function () {
  alert("Cordial saludo! Soy " + this.innerHTML);
});

document.getElementById("image_profile").addEventListener("click", function () {
  cambiarFondo(this);
});

//---------------------------------------------------------
function mover(e) {
  var codigo_tecla = e.which || e.keyCode;
  var vleft = parseInt(
    window.getComputedStyle(objImage, null).getPropertyValue("left")
  );
  var vtop = parseInt(
    window.getComputedStyle(objImage, null).getPropertyValue("top")
  );
  if (codigo_tecla == 65) {
    var newleft = vleft - 20;
    objImage.style.left = newleft + "px";
  }
  if (codigo_tecla == 68) {
    var newleft = vleft + 20;
    objImage.style.left = newleft + "px";
  }
  if (codigo_tecla == 83) {
    var newtop = vtop + 20;
    objImage.style.top = newtop + "px";
  }

  if (codigo_tecla == 87) {
    var newtop = vtop - 20;
    objImage.style.top = newtop + "px";
  }
}

var objImage = document.getElementById("profile_pic");
objImage.style.position = "relative";
document.addEventListener("keydown", mover);

