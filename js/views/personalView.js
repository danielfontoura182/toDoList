import View from './View.js'

class PersonalView extends View {
  _parentElement = document.querySelector('.personal-list')

  _generateMarkup() {
    return `
                ${this._data['personal']
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

export default new PersonalView()
