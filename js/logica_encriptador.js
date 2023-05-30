//esta funcion encripta
function encriptar(){
    var texto= document.getElementById("texto-ingresado").value.toLowerCase();
    var txtCifrado = texto.replace(/e/img,"enter");
    var txtCifrado = txtCifrado.replace(/o/img,"ober");
    var txtCifrado = txtCifrado.replace(/i/img,"imes");
    var txtCifrado = txtCifrado.replace(/a/img,"ai");
    var txtCifrado = txtCifrado.replace(/u/img,"ufat");

    document.getElementById("imagen_busqueda").style.display = "none";
    document.getElementById("text_titulo").style.display = "none";
    document.getElementById("text_descripcion").style.display = "none";
    document.getElementById("texto-encriptado").innerHTML= txtCifrado;
    document.getElementById("copear").style.display = "show";
    document.getElementById("copear").style.display ="inherit";
    
}
//esta funcion desencripta
function desencriptar(){
    var texto= document.getElementById("texto-ingresado").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/img,"e");
    var txtCifrado = txtCifrado.replace(/ober/img,"o");
    var txtCifrado = txtCifrado.replace(/imes/img,"i");
    var txtCifrado = txtCifrado.replace(/ai/img,"a");
    var txtCifrado = txtCifrado.replace(/ufat/img,"u");

    document.getElementById("imagen_busqueda").style.display = "none";
    document.getElementById("text_titulo").style.display = "none";
    document.getElementById("text_descripcion").style.display = "none";
    document.getElementById("texto-encriptado").innerHTML = txtCifrado;
    document.getElementById("copear").style.display = "show";
    document.getElementById("copear").style.display ="inherit"; 
}
function copy(){
    var contenito=document.querySelector("#texto-encriptado");
    contenito.select();
    document.execCommand("copy");
    document.getElementById("texto-encriptado").innerHTML = "";
}
