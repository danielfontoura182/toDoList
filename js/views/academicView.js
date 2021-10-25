import View from './View.js'

class academicView extends View {
  _parentElement = document.querySelector('.academic-list')

  _generateMarkup() {
    return `
                ${this._data['academic']
                  .map(
                    (item) =>
                      `<li class="${item.completed ? 'completed' : ''}">${
                        item.todo.length > 40
                          ? item.todo.slice(0, 41) + `...`
                          : item.todo
                      } <span class="todo-deadline">(${new Date(
                        item.date + ` 00:00:00`
                      ).toLocaleDateString()})</span></li>`
                  )
                  .join('')}
            `
  }
}

export default new academicView()
