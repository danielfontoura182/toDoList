import * as model from './model.js'
import personalView from './views/personalView.js'
import studyView from './views/studyView.js'
import professionalView from './views/professionalView.js'

function controlView(category) {
  const currentState = model.state

  if (category === 'personal') {
    personalView.render(currentState)
  }

  if (category === 'study') {
    studyView.render(currentState)
  }

  if (category === 'professional') {
    professionalView.render(currentState)
  }
}

function loadFirstView() {
  const currentState = model.state

  if (currentState['personal']) {
    personalView.render(currentState)
  }

  if (currentState['study']) {
    studyView.render(currentState)
  }

  if (currentState['professional']) {
    professionalView.render(currentState)
  }
}

function addToDo() {
  const toDoItemValue = document.querySelector('.todo-item').value
  const toDoDateValue = document.querySelector('.todo-date').value
  const toDoCategoryValue = document.getElementById('category__select').value

  if (!toDoItemValue) {
    alert('You must type a toDo first')
    return
  }

  if (!toDoDateValue) {
    alert('You must insert a valid date')
    return
  }

  if (new Date(toDoDateValue) - new Date() < 0) {
    if (
      !confirm('The deadline date is a previous date. Do you want to continue?')
    ) {
      return
    }
  }

  if (!model.state[toDoCategoryValue]) {
    model.addToState(0, toDoItemValue, toDoDateValue, toDoCategoryValue)
    clearInputs()
    console.log(model.state)

    return
  }

  model.addToState(
    model.state[toDoCategoryValue].length,
    toDoItemValue,
    toDoDateValue,
    toDoCategoryValue
  )

  console.log(model.state)
}

function clearInputs() {
  const toDoItemInput = document.querySelector('.todo-item')
  const toDoDateInput = document.querySelector('.todo-date')

  toDoItemInput.value = ''
  toDoDateInput.value = ''
}

function updateLocalStorage() {
  localStorage.setItem('list', JSON.stringify(model.state))
}

function init() {
  console.log(model.state)

  loadFirstView()

  const addToDoBtn = document.querySelector('.add')
  addToDoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addToDo()
    updateLocalStorage()
    controlView(document.getElementById('category__select').value)
    clearInputs()
  })
}

init()
