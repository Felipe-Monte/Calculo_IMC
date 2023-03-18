import { Modal } from "../js/modal.js"
import { AlertError } from "../js/alert-error.js"
import { calcIMC, notNumber } from "../js/utils.js"

const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const form = document.querySelector('form')

form.onsubmit = (e) => {
  e.preventDefault()

  let weight = inputWeight.value
  let height = inputHeight.value

  let checkErrorMessage = notNumber(weight) || notNumber(height)

  if (checkErrorMessage) {
    AlertError.element.classList.add('open')
    return
  }

  let result = calcIMC(weight, height)
  let message = `Seu IMC é de ${result}`

  Modal.open()
  Modal.message.innerText = message
}

form.oninput = function () {
  AlertError.element.classList.remove('open')
}








