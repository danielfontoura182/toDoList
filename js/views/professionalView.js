import View from './View.js'

class ProfessionalView extends View {
  _parentElement = document.querySelector('.professional-list')

  _generateMarkup() {
    return `
                ${this._data['professional']
                  .map(
                    (item) =>
                      `<li class="${item.completed ? 'completed' : ''}">${
                        item.todo.length > 40
                          ? item.todo.slice(0, 41) + `...`
                          : item.todo
                      } <span class="todo-deadline">(${new Date(
                        item.date + `T00:00:00`
                      ).toLocaleDateString()})</span></li>`
                  )
                  .join('')}
            `
  }
}

export default new ProfessionalView()
