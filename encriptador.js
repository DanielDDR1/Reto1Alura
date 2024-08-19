const d = document;
const textArea = d.querySelector(".entrada_texto");
const imagenMuneco = d.querySelector(".msj_muneco");
const loaderBatman = d.querySelector(".loader");
const resultadoTitulo = d.querySelector(".titulo_msj2");
const resultadoText = d.querySelector(".parrafo_msj2");
const botonEncriptar = d.querySelector(".btn_encriptar");
const botonDesencriptar = d.querySelectorAll(".btn_encriptar");
const botonCopiar = d.querySelector(".btn_copiar");



  const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  //Funcion para encriptar
  function ecriptarmensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
      let letra = mensaje[i];
      let encriptada = letra;
      for (let j = 0; j < llaves.length; j++) {
        if (letra === llaves[j][0]) {
          encriptada = llaves[j][1]; // Reemplaza la letra por su equivalente encriptado
          break; // Termina el bucle cuando se encuentra la correspondencia
        }
      }
      mensajeEncriptado += encriptada;
    }
  
    return mensajeEncriptado;
  }
  // function  para desencriptar
  function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++) {
      let regex = new RegExp(llaves[i][1], "g");
      mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]); // Reemplaza el texto encriptado por su equivalente original
    }
    return mensajeDesencriptado; // Devuelve el mensaje desencriptado
  }
  //Ocultar elementos dinamicamente
  textArea.addEventListener("input", (e) => {
    imagenMuneco.style.display = "none";
    loaderBatman.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando Mensaje.";
    resultadoText.textContent = "";
  });
  //Funcion del boton encriptar
  botonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = ecriptarmensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:";
  });
  
  botonDesencriptar[1].addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "El resultado es:";
    botonCopiar.classList.remove("hidden");
  });
  
  
  botonCopiar.addEventListener('click', ()=>{
      let textoCopiado = resultadoText.textContent;
      navigator.clipboard.writeText(textoCopiado).then(()=> {
          imagenMuneco.style.display = "block";
          loaderBatman.classList.add("hidden");
          resultadoTitulo.textContent = "El texto se copio";
          botonCopiar.classList.add("hidden");
          resultadoText.textContent = ""
      })
  });