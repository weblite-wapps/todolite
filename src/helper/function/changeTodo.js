const R = window.R


const generateKey = () => Math.floor(Math.random() * 10000000000000)
const dispatch = qlite => W.share.dispatch([], qlite, [])


export const addTodo = (title, todos) => dispatch(
  ['__append', [{ id: generateKey(), title }]],
)

// R.append({ id: generateKey(), title }, todos)


export const editTitle = (id, title, todos) => dispatch(
  ['__map', [['__ifElse', [
    ['__propEq', ['id', id]],
    ['__assoc', ['title', title]],
    ['__identity', []],
  ]]]],
)

// R.map(R.ifElse(
//   R.propEq('id', id),
//   R.assoc('title', title),
//   R.identity,
// ), todos)


export const addFunctor = (id, name, todos) => dispatch(
  ['__map', [['__ifElse', [
    ['__propEq', ['id', id]],
    ['__assoc', ['functor', name]],
    ['__identity', []],
  ]]]],
)

// R.map(R.ifElse(
//   R.propEq('id', id),
//   R.assoc('functor', name),
//   R.identity,
// ), todos)


export const deleteTodo = (id, todos) => dispatch(
  ['__reject', [['__propEq', ['id', id]]]],
)

// R.reject(R.propEq('id', id), todos)
