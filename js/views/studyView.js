import View from './View.js'

class StudyView extends View {
  _parentElement = document.querySelector('.list-container')

  _generateMarkup() {
    return `
        <div class="list-container__list study">
            <h2 class="list-container__title">Study</h2>
            <button class="manage manage__study">Manage List</button>
            <ul class="list-container__list">
                ${this._data['study']
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

export default new StudyView()
