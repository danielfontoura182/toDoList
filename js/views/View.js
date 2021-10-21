export default class View {
  _data

  render(data, category = null) {
    this._data = data

    if (category) {
      const markup = this._generateMarkup(category)
      this._parentElement.insertAdjacentHTML('beforeend', markup)
      return
    }

    const markup = this._generateMarkup()
    this._parentElement.insertAdjacentHTML('beforeend', markup)
  }

  _clear() {
    this._parentElement.innerHTML = ''
  }
}
