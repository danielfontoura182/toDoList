import View from './View.js'

class ModalView {
  _parentElement = document.querySelector('body')

  _generateMarkup() {
    return `

    <div class="modal">
        <div class="modal__container">
            <span class="close-modal">+</span>
            <div class="modal__input-container">
            <h2 class="modal__title">Personal</h2>
            <ul class="modal__inputs">
                <li class="modal__item">
                    <input type="text" value="Just a test todo" />
                    <span class="modal__delete" data-id="">+</span>
                    <span class="modal__check-completed" data-id="">V</span>
                </li>
            </ul>
            <div class="modal__buttons">
                <button class="update">update</button>
                <button class="cancel">cancel</button>
            </div>
        </div>
    </div>
  </div>
    `
  }
}
