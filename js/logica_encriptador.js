//esta funcion encripta
function encriptar() {
  var texto = document.getElementById("texto-ingresado").value;
  var txtCifrado = texto.replace(/e/gim, "enter");
  var txtCifrado = txtCifrado.replace(/o/gim, "ober");
  var txtCifrado = txtCifrado.replace(/i/gim, "imes");
  var txtCifrado = txtCifrado.replace(/a/gim, "ai");
  var txtCifrado = txtCifrado.replace(/u/gim, "ufat");
  var bocales = /[áéíóúÁÉÍÓÚ]/;
  if (texto == "") {
    Swal.fire(
      "No hay texto?",
      "ingresa uno para que funcione el encriptador",
      "question"
    );
  }else if (bocales.test(texto)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se aceptan letras mayusculas y minusculas con acento (áéí/ÁÉÍ/ABC)",
    });
  } else if (texto !== texto.toLowerCase()) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se aceptan mayusculas (ABCDE...)",
    });
  }  else {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Encriptado correctamente',
        showConfirmButton: false,
        timer: 850
      })
    document.getElementById("imagen_busqueda").style.display = "none";
    document.getElementById("text_titulo").style.display = "none";
    document.getElementById("text_descripcion").style.display = "none";
    document.getElementById("texto-encriptado").innerHTML = txtCifrado;
    document.getElementById("copear").style.display = "show";
    document.getElementById("copear").style.display = "inherit";
  }
  
}
//esta funcion desencripta
function desencriptar() {
  var texto = document.getElementById("texto-ingresado").value;
  var txtCifrado = texto.replace(/enter/gim, "e");
  var txtCifrado = txtCifrado.replace(/ober/gim, "o");
  var txtCifrado = txtCifrado.replace(/imes/gim, "i");
  var txtCifrado = txtCifrado.replace(/ai/gim, "a");
  var txtCifrado = txtCifrado.replace(/ufat/gim, "u");
  var bocales = /[áéíóúÁÉÍÓÚ]/;
  if (texto == "") {
    Swal.fire(
      "No hay texto?",
      "ingresa uno para que funcione el encriptador",
      "question"
    );
  }else if (bocales.test(texto)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se aceptan letras mayusculas y minusculas con acento (áéí/ÁÉÍ/ABC)",
    });
  } else if (texto !== texto.toLowerCase()) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se aceptan mayusculas (ABCDE...)",
    });
  }  else {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Desencriptado correctamente',
        showConfirmButton: false,
        timer: 850
      })
    document.getElementById("imagen_busqueda").style.display = "none";
    document.getElementById("text_titulo").style.display = "none";
    document.getElementById("text_descripcion").style.display = "none";
    document.getElementById("texto-encriptado").innerHTML = txtCifrado;
    document.getElementById("copear").style.display = "show";
    document.getElementById("copear").style.display = "inherit";
  }
}
function copy() {
  var contenito = document.querySelector("#texto-encriptado");
  contenito.select();
  document.execCommand("copy");
  var borrar_textarea = document.getElementById("texto-ingresado");
  borrar_textarea.value = "";
}
