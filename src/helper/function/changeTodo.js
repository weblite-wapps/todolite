const { W } = window

const generateKey = () => Math.floor(Math.random() * 1e15)
const dispatch = qlite => W.share.dispatch([], qlite, [])

export const addTodo = (title, name) =>
  dispatch([
    '__append',
    [{ id: generateKey(), title, functor: '', vit: false, creator: name }],
  ])

export const changeTitle = (id, title) =>
  dispatch([
    '__map',
    [
      [
        '__ifElse',
        [
          ['__propEq', ['id', id]],
          ['__assoc', ['title', title]],
          ['__identity', []],
        ],
      ],
    ],
  ])

export const changeFunctor = (id, name) =>
  dispatch([
    '__map',
    [
      [
        '__ifElse',
        [
          ['__propEq', ['id', id]],
          ['__assoc', ['functor', name]],
          ['__identity', []],
        ],
      ],
    ],
  ])

export const changeVit = (id, vit) =>
  dispatch([
    '__map',
    [
      [
        '__ifElse',
        [
          ['__propEq', ['id', id]],
          ['__assoc', ['vit', vit]],
          ['__identity', []],
        ],
      ],
    ],
  ])

export const deleteTodo = id =>
  dispatch(['__reject', [['__propEq', ['id', id]]]])
