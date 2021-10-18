export const state = {}

export function addToState(id, todo, date, category) {
  if (state[category]) {
    state[category].push({ id, todo, date })
    return
  }

  state[category] = [{ id, todo: todo, date: date }]
}
