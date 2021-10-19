import View from './View.js'

class StudyView extends View {
  _parentElement = document.querySelector('.study-list')

  _generateMarkup() {
    return `
                ${this._data['study']
                  .map(
                    (item) =>
                      `<li>${
                        item.todo.length > 40
                          ? item.todo.slice(1, 41) + `...`
                          : item.todo
                      } <span class="todo-deadline">(${new Date(
                        item.date
                      ).toLocaleDateString()})</span></li>`
                  )
                  .join('')}
            `
  }
}

export default new StudyView()
