const btnActivador = document.getElementById("botonMenu")

window.addEventListener("DOMContentLoaded", () => {
  btnActivador.addEventListener("click", function () {
    document.getElementById("lista").classList.toggle("lista-active")
  })
})

const header = document.querySelector(".textos"),
  svg = document.querySelector("svg"),
  main = document.querySelector("main"),
  logo = document.querySelector(".logo")
header.addEventListener("click", () => {
  document.getElementById("lista").classList.add("lista-active")
})

svg.addEventListener("click", () => {
  document.getElementById("lista").classList.add("lista-active")
})

main.addEventListener("click", () => {
  document.getElementById("lista").classList.add("lista-active")
})

logo.addEventListener("click", () => {
  document.getElementById("lista").classList.add("lista-active")
})
