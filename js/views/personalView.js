import View from './View.js'

class PersonalView extends View {
  _parentElement = document.querySelector('.personal-list')

  _generateMarkup() {
    return `
                ${this._data['personal']
                  .map(
                    (item) =>
                      `<li>${
                        item.todo.length > 40
                          ? item.todo.slice(1, 41) + `...`
                          : item.todo
                      } <span class="todo-deadline">(${new Date(
                        item.date + ` 00:00:00`
                      ).toLocaleDateString()})</span></li>`
                  )
                  .join('')}
            `
  }
}

export default new PersonalView()
