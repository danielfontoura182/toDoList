export const state = JSON.parse(localStorage.getItem('list')) || {}

export function addToState(id, todo, date, category, completed = false) {
  if (state[category]) {
    state[category].push({ id, todo, date, completed })
    return
  }

  state[category] = [{ id, todo: todo, date: date, completed: completed }]
}

export function updateState(updatedToDoList, category) {
  state[category] = updatedToDoList
}

export function deleteToDo(category, id) {
  state[category].splice(+id, +id + 1)
}

export function controlCompleted(category, id) {
  state[category][+id].completed = !state[category][+id].completed
}
