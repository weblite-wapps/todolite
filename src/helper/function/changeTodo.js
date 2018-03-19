const R = window.R


const generateKey = () => Math.floor(Math.random() * 10000000000000)

export const addTodo = (title, todos) =>
  R.append({ id: generateKey(), title }, todos)

export const editTitle = (id, title, todos) => R.map(R.ifElse(
  R.propEq('id', id),
  R.assoc('title', title),
  R.identity,
), todos)

export const addFunctor = (id, name, todos) => R.map(R.ifElse(
  R.propEq('id', id),
  R.assoc('functor', name),
  R.identity,
), todos)

export const deleteTodo = (id, todos) => R.reject(R.propEq('id', id), todos)
