import View from './View.js'

class ProfessionalView extends View {
  _parentElement = document.querySelector('.professional-list')

  _generateMarkup() {
    return `
                ${this._data['professional']
                  .map(
                    (item) =>
                      `<li>${item.todo} - ${new Date(
                        item.date
                      ).toLocaleDateString()}</li>`
                  )
                  .join('')}
            `
  }
}

export default new ProfessionalView()
