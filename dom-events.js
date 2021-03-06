const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")

window.onload = () => {
  greetingEl.innerText = "oh, hey there!"
  renderAstros()
}

renderAstros = () => {
  const astros = peopleInSpace["people"]
  let peopleEls = astros.map((a) => {
    let name = a["name"]
    return `<li>${name}</li>`
  })
  astrosEl.innerHTML = `<ul>${peopleEls.join("")}</ul>`
}


 // create a function that alerts "these are all the astronauts!" when a title element is clicked.
var title = document.getElementsByClassName('title')[0]
title.onclick = () => {
  alert("these are all the astronauts!")
}
 // log to the console the client's x coordinate of their mouse as they move it around the window.

// make an element that displays the most recent key pressed in the DOM

// create a text input element. When a user clicks on the text field to input, log the input element to console.

// when a user clicks away from the input, log ("bye") to the console.

const form = document.getElementById("almostlunch")
const textInput = document.getElementById("textInput")
const answer = document.getElementById("answer")
form.onsubmit = (event) => {
  event.preventDefault()
  console.log(textInput.value)
  answer.innerText = textInput.value
}

// wrap the input element with a form element.

// when the form is submitted, render the client's inputted text to the DOM

// HINT: look into event.preventDefault()
