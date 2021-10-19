import View from './View.js'

class ProfessionalView extends View {
  _parentElement = document.querySelector('.list-container')

  _generateMarkup() {
    return `
        <div class="list-container__list professional">
            <h2 class="list-container__title">Professional</h2>
            <button class="manage manage__professional">Manage List</button>
            <ul class="list-container__list">
                ${this._data['professional']
                  .map(
                    (item) =>
                      `<li>${item.todo} - ${new Date(
                        item.date
                      ).toLocaleDateString()}</li>`
                  )
                  .join('')}
            </ul>
        </div>
        `
  }
}

export default new ProfessionalView()
