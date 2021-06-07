const d = document
//Menu responsive
const btnActivador = document.getElementById("botonMenu")

window.addEventListener("DOMContentLoaded", () => {
  btnActivador.addEventListener("click", function () {
    document.getElementById("lista").classList.toggle("active")
  })
})

const header = document.querySelector(".textos"),
  svg = document.querySelector("svg"),
  main = document.querySelector("main"),
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

//CARDS

const card3DO1 = d.querySelector(".contenedor_tarjeta_O1"),
  orig1 = d.querySelector(".contenedor_tarjeta_O1 .orig1"),
  card3DO2 = d.querySelector(".contenedor_tarjeta_O2"),
  orig2 = d.querySelector(".contenedor_tarjeta_O2 .orig2")

// window.addEventListener("d")

let i = 0
const toggleShow = () => {
  i++
  if (i % 2 === 0) {
    orig1.style.transform = "none"
  } else if (i % 2 === 1) {
    orig1.style.transform = ""
  }
}
let i2 = 0
const toggleShowO2 = () => {
  i2++
  if (i2 % 2 === 0) {
    orig2.style.transform = "none"
  } else if (i2 % 2 === 1) {
    orig2.style.transform = ""
  }
}

card3DO1.addEventListener("click", toggleShow)
card3DO2.addEventListener("click", toggleShowO2)

// SLIDER

const $btnPrev = d.querySelector(".btnPrev"),
  $btnNext = d.querySelector(".btnNext"),
  $sliderImg = d.querySelector(".sliderImg"),
  $sliderList = d.querySelector(".sliderList"),
  $sliderSlide = d.querySelectorAll(".sliderSlide")

const sliderSlideW = $sliderSlide[0].clientWidth
let counter = 1

$btnPrev.addEventListener("click", () => {
  Move(1)
  counter--
  console.log(counter)
})

$btnNext.addEventListener("click", () => {
  Move(2)
  counter++
  console.log(counter)
})

const Move = (value) => {
  const sliderImgWidth = $sliderImg.clientWidth
  const sliderListWidth = $sliderList.clientWidth

  console.log(sliderImgWidth)
  console.log(sliderListWidth)

  $sliderImg.style.left == ""
    ? (leftPosition = $sliderImg.style.left = 0)
    : (leftPosition = parseFloat($sliderImg.style.left.slice(0, -2) * -1))

  if (leftPosition < sliderImgWidth - sliderListWidth && value == 2) {
    $sliderImg.style.left = `${-1 * (leftPosition + sliderSlideW)}px`
  } else if (leftPosition > 0 && value == 1) {
    $sliderImg.style.left = `${-1 * (leftPosition - sliderSlideW)}px`
  }
  if (counter >= $sliderSlide.length) {
    $sliderImg.style.left = "0"
    counter = "0"
  }
}

// SLIDER 2
const $btnPrev2 = d.querySelector(".btnPrev2"),
  $btnNext2 = d.querySelector(".btnNext2"),
  $sliderImg2 = d.querySelector(".sliderImg2"),
  $sliderList2 = d.querySelector(".sliderList2"),
  $sliderSlide2 = d.querySelectorAll(".sliderSlide2")

const sliderSlideW2 = $sliderSlide2[0].clientWidth

$btnPrev2.addEventListener("click", () => {
  Move2(1)
  counter--
  console.log(counter)
})

$btnNext2.addEventListener("click", () => {
  Move2(2)
  counter++
  console.log(counter)
})

const Move2 = (value) => {
  const sliderImgWidth2 = $sliderImg2.clientWidth
  const sliderListWidth2 = $sliderList2.clientWidth

  $sliderImg2.style.left == ""
    ? (leftPosition = $sliderImg2.style.left = 0)
    : (leftPosition = parseFloat($sliderImg2.style.left.slice(0, -2) * -1))

  if (leftPosition < sliderImgWidth2 - sliderListWidth2 && value == 2) {
    $sliderImg2.style.left = `${-1 * (leftPosition + sliderSlideW2)}px`
  } else if (leftPosition > 0 && value == 1) {
    $sliderImg2.style.left = `${-1 * (leftPosition - sliderSlideW2)}px`
  }
  if (counter >= $sliderSlide2.length) {
    $sliderImg2.style.left = "0"
    counter = "0"
  }
}
