import * as model from './model.js'

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

function init() {
  const addToDoBtn = document.querySelector('.add')
  addToDoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addToDo()
  })
}

init()
