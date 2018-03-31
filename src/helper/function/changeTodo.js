const { W } = window


const generateKey = () => Math.floor(Math.random() * 10000000000000)
const dispatch = qlite => W.share.dispatch([], qlite, [])


export const addTodo = (title) => dispatch(
  ['__append', [{ id: generateKey(), title, functor: '' }]],
)

export const editTitle = (id, title) => dispatch(
  ['__map', [['__ifElse', [
    ['__propEq', ['id', id]],
    ['__assoc', ['title', title]],
    ['__identity', []],
  ]]]],
)

export const addFunctor = (id, name) => dispatch(
  ['__map', [['__ifElse', [
    ['__propEq', ['id', id]],
    ['__assoc', ['functor', name]],
    ['__identity', []],
  ]]]],
)

export const deleteTodo = (id) => dispatch(
  ['__reject', [['__propEq', ['id', id]]]],
)
