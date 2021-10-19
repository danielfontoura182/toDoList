import View from './View.js'

class StudyView extends View {
  _parentElement = document.querySelector('.study-list')

  _generateMarkup() {
    return `
                ${this._data['study']
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

export default new StudyView()
