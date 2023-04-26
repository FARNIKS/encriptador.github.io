//esta funcion encripta
function encriptar(){
    var texto= document.getElementById("texto-ingresado").value;
    var txtCifrado = texto.replace(/[^a-z\s]e/img,"enter");
    var txtCifrado = txtCifrado.replace(/[^a-z\s]o/img,"ober");
    var txtCifrado = txtCifrado.replace(/[^a-z\s]i/img,"imes");
    var txtCifrado = txtCifrado.replace(/[^a-z\s]a/img,"ai");
    var txtCifrado = txtCifrado.replace(/[^a-z\s]u/img,"ufat");

    document.getElementById("imagen_busqueda").style.display = "none";
    document.getElementById("text_titulo").style.display = "none";
    document.getElementById("text_descripcion").style.display = "none";
    document.getElementById("texto-encriptado").innerHTML= txtCifrado;
    document.getElementById("copear").style.display = "show";
    document.getElementById("copear").style.display ="inherit";
    
}
//esta funcion desencripta
function desencriptar(){
    var texto= document.getElementById("texto-ingresado").value;
    var txtCifrado = texto.replace(/[^a-z\s]enter/img,"e");
    var txtCifrado = txtCifrado.replace(/[^a-z\s]ober/img,"o");
    var txtCifrado = txtCifrado.replace(/[^a-z\s]imes/img,"i");
    var txtCifrado = txtCifrado.replace(/[^a-z\s]ai/img,"a");
    var txtCifrado = txtCifrado.replace(/[^a-z\s]ufat/img,"u");

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
    
}
