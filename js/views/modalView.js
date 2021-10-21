import View from './View.js'

class ModalView extends View {
  _parentElement = document.querySelector('body')

  _generateMarkup(category) {
    return `

    <div class="modal">
        <div class="modal__container">
            <span class="close-modal">+</span>
            <div class="modal__input-container">
            <h2 class="modal__title">${category}</h2>
            <ul class="modal__inputs">
              ${this._data
                .map((item) => {
                  return `
                <li data-id="${item.id}" class="modal__item">
                    <input type="text" value="${item.todo}" />
                    <input class="modal__date" type="date" value="${item.date}" />
                    <span class="modal__delete" data-id="${item.id}">+</span>
                    <span class="modal__check-completed" data-id="${item.id}">V</span>
                </li>
                `
                })
                .join('')}
                
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

export default new ModalView()
