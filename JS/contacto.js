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

const expresiones = {
  nombre: /^[ñÑa-zA-ZÀ-ÿ\s]{1,40}$/, // Nombre
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

    case "asunt":
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

// Asunto

const $asunto = document.querySelector(".grupo-asunto-input"),
  $asuntoCheckboxes = document.querySelectorAll("#asunto")

$asuntoCheckboxes[0].addEventListener("click", () => {
  if ($asuntoCheckboxes[0].checked) {
    $asuntoCheckboxes[1].setAttribute("disabled", "disabled")
    $asuntoCheckboxes[2].setAttribute("disabled", "disabled")
    $asuntoCheckboxes[3].setAttribute("disabled", "disabled")
  } else {
    $asuntoCheckboxes[1].removeAttribute("disabled")
    $asuntoCheckboxes[2].removeAttribute("disabled")
    $asuntoCheckboxes[3].removeAttribute("disabled")
  }
})
$asuntoCheckboxes[1].addEventListener("click", () => {
  if ($asuntoCheckboxes[1].checked) {
    $asuntoCheckboxes[0].setAttribute("disabled", "disabled")
    $asuntoCheckboxes[2].setAttribute("disabled", "disabled")
    $asuntoCheckboxes[3].setAttribute("disabled", "disabled")
  } else {
    $asuntoCheckboxes[0].removeAttribute("disabled")
    $asuntoCheckboxes[2].removeAttribute("disabled")
    $asuntoCheckboxes[3].removeAttribute("disabled")
  }
})
$asuntoCheckboxes[2].addEventListener("click", () => {
  if ($asuntoCheckboxes[2].checked) {
    $asuntoCheckboxes[0].setAttribute("disabled", "disabled")
    $asuntoCheckboxes[1].setAttribute("disabled", "disabled")
    $asuntoCheckboxes[3].setAttribute("disabled", "disabled")
  } else {
    $asuntoCheckboxes[0].removeAttribute("disabled")
    $asuntoCheckboxes[1].removeAttribute("disabled")
    $asuntoCheckboxes[3].removeAttribute("disabled")
  }
})
$asuntoCheckboxes[3].addEventListener("click", () => {
  if ($asuntoCheckboxes[3].checked) {
    $asuntoCheckboxes[0].setAttribute("disabled", "disabled")
    $asuntoCheckboxes[1].setAttribute("disabled", "disabled")
    $asuntoCheckboxes[2].setAttribute("disabled", "disabled")
  } else {
    $asuntoCheckboxes[0].removeAttribute("disabled")
    $asuntoCheckboxes[1].removeAttribute("disabled")
    $asuntoCheckboxes[2].removeAttribute("disabled")
  }
})

// Validar mensaje

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

const error = document.querySelectorAll(".input-error"),
  errorTextarea = document.querySelector(".input-textarea-error")

console.log(error)

$formulario.addEventListener("keyup", () => {
  if (
    !$inputs[4].value ||
    error[0].className === "input-error input-error-activo" ||
    !$inputs[5].value ||
    error[1].className === "input-error input-error-activo" ||
    !$inputs[6].value ||
    error[2].className === "input-error input-error-activo" ||
    !$textArea.value ||
    errorTextarea.className ===
      "input-textarea-error input-textarea-error-activo" ||
    (!$asuntoCheckboxes[0].checked &&
      !$asuntoCheckboxes[1].checked &&
      !$asuntoCheckboxes[2].checked &&
      !$asuntoCheckboxes[3].checked)
  ) {
    $sendBtn.className = "formulario-btn-disabled"
    $sendBtn.setAttribute("disabled", "disabled")
  } else {
    $sendBtn.className = "formulario-btn"
    $sendBtn.removeAttribute("disabled")
  }
})
$formulario.addEventListener("blur", () => {
  if (
    !$inputs[4].value ||
    error[0].className === "input-error input-error-activo" ||
    !$inputs[5].value ||
    error[1].className === "input-error input-error-activo" ||
    !$inputs[6].value ||
    error[2].className === "input-error input-error-activo" ||
    !$textArea.value ||
    errorTextarea.className ===
      "input-textarea-error input-textarea-error-activo" ||
    (!$asuntoCheckboxes[0].checked &&
      !$asuntoCheckboxes[1].checked &&
      !$asuntoCheckboxes[2].checked &&
      !$asuntoCheckboxes[3].checked)
  ) {
    $sendBtn.className = "formulario-btn-disabled"
    $sendBtn.setAttribute("disabled", "disabled")
  } else {
    $sendBtn.className = "formulario-btn"
    $sendBtn.removeAttribute("disabled")
  }
})
$formulario.addEventListener("click", () => {
  if (
    !$inputs[4].value ||
    error[0].className === "input-error input-error-activo" ||
    !$inputs[5].value ||
    error[1].className === "input-error input-error-activo" ||
    !$inputs[6].value ||
    error[2].className === "input-error input-error-activo" ||
    !$textArea.value ||
    errorTextarea.className ===
      "input-textarea-error input-textarea-error-activo" ||
    (!$asuntoCheckboxes[0].checked &&
      !$asuntoCheckboxes[1].checked &&
      !$asuntoCheckboxes[2].checked &&
      !$asuntoCheckboxes[3].checked)
  ) {
    $sendBtn.className = "formulario-btn-disabled"
    $sendBtn.setAttribute("disabled", "disabled")
  } else {
    $sendBtn.className = "formulario-btn"
    $sendBtn.removeAttribute("disabled")
  }
})
document.addEventListener("submit", (e) => {
  const successMsg = document.querySelector(".successMsg")

  e.preventDefault()
  fetch("https://formsubmit.co/ajax/camiloandreshuertas26@gmail.com", {
    method: "POST",
    body: new FormData(e.target),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json)
      successMsg.classList.add("successMsg-enabled")
      $formulario.reset()
      setTimeout(() => {
        location.reload()
      }, 2000)
    })
    .catch((err) => {
      console.log(err)
    })
})
