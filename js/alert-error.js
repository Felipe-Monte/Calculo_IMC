
export const AlertError = {
  element: document.querySelector('.alert-error'),

  open() {
    messageError.classList.add('open')
  },
  close() {
    messageError.classList.remove('open')
  }
}