export const Modal = {
  wrapper: document.querySelector('.modal'),
  btnClose: document.querySelector('#close-button'),
  message: document.querySelector('#card-modal span'),

  open() {
    this.wrapper.classList.add('open')
  },
  close() {
    this.wrapper.classList.remove('open')
  }
}

Modal.btnClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', closeModalWithEsc)

function closeModalWithEsc(e) {
  if (e.key == "Escape") {
    Modal.close()
  }
}