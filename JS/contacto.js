const btnActivador = document.getElementById("botonMenu")

window.addEventListener("DOMContentLoaded", () => {
  btnActivador.addEventListener("click", function () {
    document.getElementById("lista").classList.toggle("active")
  })
})

const header = document.querySelector(".textos"),
  svg = document.querySelector("svg"),
  main = document.querySelector("main"),
  tituloForm = document.querySelector(".titulo-form"),
  logo = document.querySelector(".logo")

header.addEventListener("click", () => {
  document.getElementById("lista").classList.add("active")
})

svg.addEventListener("click", () => {
  document.getElementById("lista").classList.add("active")
})

main.addEventListener("click", () => {
  document.getElementById("lista").classList.add("active")
})
tituloForm.addEventListener("click", () => {
  document.getElementById("lista").classList.add("active")
})

const $formulario = document.getElementById("formulario"),
  $inputs = document.querySelectorAll("#formulario input"),
  $textAreaDiv = document.querySelector(".formulario-textarea"),
  $textArea = document.querySelector(".formulario-textarea .textarea"),
  $sendBtn = document.querySelector(".formulario-btn-disabled")

$formulario.addEventListener("keyup", () => {
  if (
    $inputs[4].value &&
    $inputs[5].value &&
    $inputs[6].value &&
    $textArea.value
  ) {
    $sendBtn.className = "formulario-btn"
    $sendBtn.removeAttribute("disabled")
  } else {
    $sendBtn.className = "formulario-btn-disabled"
    $sendBtn.setAttribute("disabled", "disabled")
  }
})

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Nombre
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Validacion Correo
  asunto:
    /^(Informacion General|Solicitud Cotizacion|Quejas - Reclamos|Sugerencias)$/i,
}

const campos = {
  nombre: false,
  email: false,
  asunto: false,
}

const valdiarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      valdiarCampos(expresiones.nombre, e.target, "nombre")
      break

    case "email":
      valdiarCampos(expresiones.correo, e.target, "email")
      break

    case "asunto":
      setTimeout(() => {
        valdiarCampos(expresiones.asunto, e.target, "asunto")
      }, 100)
  }
}

const valdiarCampos = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo-${campo}`)
      .classList.remove("formulario-grupo-incorrecto")
    document
      .getElementById(`grupo-${campo}`)
      .classList.add("formulario-grupo-correcto")
    document
      .querySelector(`#grupo-${campo} .input-error`)
      .classList.remove("input-error-activo")
    campos[campo] = true
  } else {
    document
      .getElementById(`grupo-${campo}`)
      .classList.add("formulario-grupo-incorrecto")
    document
      .getElementById(`grupo-${campo}`)
      .classList.remove("formulario-grupo-correcto")
    document
      .querySelector(`#grupo-${campo} .input-error`)
      .classList.add("input-error-activo")
    campos[campo] = false
  }
}

$inputs.forEach((input) => {
  input.addEventListener("keyup", valdiarFormulario)
  input.addEventListener("blur", valdiarFormulario)
})

// Input Desplegable

const $asunto = document.querySelector(".grupo-asunto-input"),
  $grupoAsunto = document.getElementById("grupo-asunto")
$liDesplegables = document.querySelectorAll(
  ".lista-desplegable .li-desplegable"
)

$asunto.addEventListener("click", () => {
  let $listaDesplegable = document
    .querySelector(".lista-desplegable")
    .classList.toggle("lista-desplegable-activo")
})

const seleccionAsunto = (e) => {
  let texto = e.target.textContent
  $asunto.value = texto

  let $listaDesplegable = document
    .querySelector(".lista-desplegable")
    .classList.remove("lista-desplegable-activo")
}

$liDesplegables.forEach((li) => {
  li.addEventListener("click", seleccionAsunto)
})

const validarMensaje = () => {
  if ($textArea.value) {
    let $grupoTextarea = document.getElementById("grupo-textArea")
    $grupoTextarea.classList.add("formulario-textarea-label-correcto")
    $textAreaDiv.classList.add("formulario-textarea-correcto")
    $textAreaDiv.classList.remove("formulario-textarea-incorrecto")
    $grupoTextarea.classList.remove("formulario-textarea-label-incorrecto")

    document
      .querySelector("#grupo-textArea .input-textarea-error")
      .classList.remove("input-textarea-error-activo")
  } else {
    let $grupoTextarea = document.getElementById("grupo-textArea")
    $grupoTextarea.classList.remove("formulario-textarea-label-correcto")
    $textAreaDiv.classList.remove("formulario-textarea-correcto")
    $textAreaDiv.classList.add("formulario-textarea-incorrecto")
    $grupoTextarea.classList.add("formulario-textarea-label-incorrecto")
    document
      .querySelector("#grupo-textArea .input-textarea-error")
      .classList.add("input-textarea-error-activo")
  }
}

$textArea.addEventListener("keyup", validarMensaje)
