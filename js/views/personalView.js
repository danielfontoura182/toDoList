import View from './View.js'

class PersonalView extends View {
  _parentElement = document.querySelector('.list-container')

  _generateMarkup() {
    return `
        <div class="list-container__list personal">
            <h2 class="list-container__title">Personal</h2>
            <button class="manage manage__personal">Manage List</button>
            <ul class="list-container__list">
                ${this._data['personal']
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

export default new PersonalView()
