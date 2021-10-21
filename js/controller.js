import * as model from './model.js'
import personalView from './views/personalView.js'
import academicView from './views/academicView.js'
import professionalView from './views/professionalView.js'
import modalView from './views/modalView.js'

function controlView(category) {
  const currentState = model.state

  if (category === 'personal') {
    personalView._clear()
    personalView.render(currentState)
  }

  if (category === 'academic') {
    academicView._clear()
    academicView.render(currentState)
  }

  if (category === 'professional') {
    professionalView._clear()
    professionalView.render(currentState)
  }
}

function loadFirstView() {
  const currentState = model.state
  const personalList = document.querySelector('.personal')
  const professionalList = document.querySelector('.professional')
  const academicList = document.querySelector('.academic')

  if (currentState['personal']) {
    personalList.style.display = 'block'
    personalView.render(currentState)
  }

  if (currentState['academic']) {
    academicList.style.display = 'block'
    academicView.render(currentState)
  }

  if (currentState['professional']) {
    professionalList.style.display = 'block'
    professionalView.render(currentState)
  }
}

function controlModalView(category) {
  modalView.render(model.state[category], category)
  const modal = document.querySelector('.modal')

  modal.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('modal') ||
      e.target.classList.contains('close-modal') ||
      e.target.classList.contains('cancel')
    ) {
      modal.remove()
      return
    }

    if (e.target.classList.contains('.update')) {
      const updatedToDoList = []
      const category = document
        .querySelector('.modal__title')
        .innerHTML.toLowerCase()

      document.querySelectorAll('.modal__item').forEach((item) => {
        updatedToDoList.push({
          id: item.dataset.id,
          todo: item.value,
          date: document.querySelector(
            `.modal__date[data-id="${item.dataset.id}"]`
          ),
          completed: model.state[category][+item.dataset].completed,
        })
      })
    }
  })
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
    document.querySelector(`.${toDoCategoryValue}`).style.display = 'block'
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

  const managePersonalList = document.querySelector('.manage__personal')
  const manageProfessionalList = document.querySelector('.manage__professional')
  const manageAcademicList = document.querySelector('.manage__academic')

  addToDoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addToDo()
    updateLocalStorage()
    controlView(document.getElementById('category__select').value)
    clearInputs()
  })

  managePersonalList.addEventListener('click', () => {
    controlModalView('personal')
  })

  manageProfessionalList.addEventListener('click', () => {
    controlModalView('professional')
  })

  manageAcademicList.addEventListener('click', () => {
    controlModalView('academic')
  })
}

init()
