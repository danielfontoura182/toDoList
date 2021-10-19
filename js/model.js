export const state = JSON.parse(localStorage.getItem('list')) || {}

export function addToState(id, todo, date, category) {
  if (state[category]) {
    state[category].push({ id, todo, date })
    return
  }

  state[category] = [{ id, todo: todo, date: date }]
}
