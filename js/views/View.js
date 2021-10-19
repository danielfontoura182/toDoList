export default class View {
  _data

  render(data) {
    this._data = data
    const markup = this.generateMarkup()
    this._parentElement.insertAdjacentHTML('beforeend', markup)
  }
}
