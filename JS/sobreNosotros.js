const btnActivador = document.getElementById("botonMenu")

window.addEventListener("DOMContentLoaded", () => {
  btnActivador.addEventListener("click", function () {
    document.getElementById("lista").classList.toggle("active")
  })
})

const header = document.querySelector(".textos"),
  svg = document.querySelector("svg"),
  main = document.querySelector(".principal"),
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

logo.addEventListener("click", () => {
  document.getElementById("lista").classList.add("active")
})
